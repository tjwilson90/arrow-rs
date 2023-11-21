// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

use crate::bloom_filter::{ngram_hashes_as_bytes, Sbbf};
use crate::data_type::AsBytes;
use std::collections::HashSet;
use std::hash::{BuildHasher, Hasher};

#[derive(Default)]
pub struct SbbfBuilder(HashSet<u64, NoopBuilderHasher>);

#[derive(Default)]
struct NoopBuilderHasher;

impl BuildHasher for NoopBuilderHasher {
    type Hasher = NoopHasher;

    fn build_hasher(&self) -> Self::Hasher {
        NoopHasher(0)
    }
}

struct NoopHasher(u64);

impl Hasher for NoopHasher {
    fn finish(&self) -> u64 {
        self.0
    }

    fn write(&mut self, _: &[u8]) {
        panic!("expected u64")
    }

    fn write_u64(&mut self, i: u64) {
        self.0 = i;
    }
}

impl SbbfBuilder {
    pub fn insert<T: AsBytes + ?Sized>(&mut self, value: &T) {
        self.0.extend(ngram_hashes_as_bytes(value, true, true));
    }

    pub fn build(self) -> Sbbf {
        let mut sbbf = Sbbf::new_with_ndv_fpp(self.0.len() as u64, 0.1).unwrap();
        self.0.into_iter().for_each(|hash| sbbf.insert_hash(hash));
        sbbf
    }
}
