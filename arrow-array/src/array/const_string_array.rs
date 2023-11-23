use crate::{Array, ArrayRef};
use arrow_buffer::NullBuffer;
use arrow_data::ArrayData;
use arrow_schema::DataType;
use std::any::Any;
use std::sync::Arc;

/// An array containing a single string repeated multiple times.
#[derive(Clone, Debug)]
pub struct ConstStringArray {
    value: String,
    len: usize,
}

impl ConstStringArray {
    /// Create a new [`ConstStringArray`] with the given value and length.
    pub fn new(value: String, len: usize) -> Self {
        Self { value, len }
    }

    /// Return the value in this array.
    pub fn value(&self) -> &str {
        &self.value
    }

    /// Return an iterator containing this array's value repeated for this array's length.
    pub fn iter(&self) -> impl Iterator<Item = &str> {
        std::iter::repeat(&*self.value).take(self.len)
    }

    /// Create a new [`ConstStringArray`] with this array's value and this length.
    pub fn with_len(&self, len: usize) -> Self {
        Self {
            value: self.value.clone(),
            len,
        }
    }
}

impl Array for ConstStringArray {
    fn as_any(&self) -> &dyn Any {
        self
    }

    fn to_data(&self) -> ArrayData {
        unimplemented!()
    }

    fn into_data(self) -> ArrayData {
        unimplemented!()
    }

    fn data_type(&self) -> &DataType {
        &DataType::ConstUtf8
    }

    fn slice(&self, _offset: usize, length: usize) -> ArrayRef {
        Arc::new(self.with_len(length))
    }

    fn len(&self) -> usize {
        self.len
    }

    fn is_empty(&self) -> bool {
        self.len == 0
    }

    fn offset(&self) -> usize {
        0
    }

    fn nulls(&self) -> Option<&NullBuffer> {
        None
    }

    fn get_buffer_memory_size(&self) -> usize {
        self.value.capacity()
    }

    fn get_array_memory_size(&self) -> usize {
        std::mem::size_of::<Self>() + self.get_buffer_memory_size()
    }
}
