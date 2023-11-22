(function() {var type_impls = {
"arrow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#61-64\">source</a><a href=\"#impl-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#67\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteDictionaryBuilder</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#83-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(\n    keys_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    value_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    data_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>\n) -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteDictionaryBuilder</code> with the provided capacities</p>\n<p><code>keys_capacity</code>: the number of keys, i.e. length of array to build\n<code>value_capacity</code>: the number of distinct dictionary values, i.e. size of dictionary\n<code>data_capacity</code>: the total number of bytes of all distinct bytes in the dictionary</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_dictionary\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#119-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.new_with_dictionary\" class=\"fn\">new_with_dictionary</a>(\n    keys_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    dictionary_values: &amp;<a class=\"struct\" href=\"arrow/array/struct.GenericByteArray.html\" title=\"struct arrow::array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;, <a class=\"enum\" href=\"arrow/error/enum.ArrowError.html\" title=\"enum arrow::error::ArrowError\">ArrowError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteDictionaryBuilder</code> from a keys capacity and a dictionary\nwhich is initialized with the given values.\nThe indices of those dictionary values are used as keys.</p>\n<h5 id=\"example\"><a href=\"#example\">Example</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code>\n<span class=\"kw\">let </span>dictionary_values = StringArray::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">None</span>, <span class=\"prelude-val\">Some</span>(<span class=\"string\">&quot;abc&quot;</span>), <span class=\"prelude-val\">Some</span>(<span class=\"string\">&quot;def&quot;</span>)]);\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = StringDictionaryBuilder::new_with_dictionary(<span class=\"number\">3</span>, <span class=\"kw-2\">&amp;</span>dictionary_values).unwrap();\nbuilder.append(<span class=\"string\">&quot;def&quot;</span>).unwrap();\nbuilder.append_null();\nbuilder.append(<span class=\"string\">&quot;abc&quot;</span>).unwrap();\n\n<span class=\"kw\">let </span>dictionary_array = builder.finish();\n\n<span class=\"kw\">let </span>keys = dictionary_array.keys();\n\n<span class=\"macro\">assert_eq!</span>(keys, <span class=\"kw-2\">&amp;</span>Int16Array::from(<span class=\"macro\">vec!</span>[<span class=\"prelude-val\">Some</span>(<span class=\"number\">2</span>), <span class=\"prelude-val\">None</span>, <span class=\"prelude-val\">Some</span>(<span class=\"number\">1</span>)]));</code></pre></div>\n</div></details></div></details>",0,"arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#201-204\">source</a><a href=\"#impl-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#211\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.append\" class=\"fn\">append</a>(\n    &amp;mut self,\n    value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;K as <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html\" title=\"trait arrow::datatypes::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow::datatypes::ArrowPrimitiveType::Native\">Native</a>, <a class=\"enum\" href=\"arrow/error/enum.ArrowError.html\" title=\"enum arrow::error::ArrowError\">ArrowError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Append a value to the array. Return an existing index\nif already present in the values array or a new index if the\nvalue is appended to the values array.</p>\n<p>Returns an error if the new index would overflow the key type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#247\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(&amp;mut self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Infallibly append a value to this builder</p>\n<h5 id=\"panics\"><a href=\"#panics\">Panics</a></h5>\n<p>Panics if the resulting length of the dictionary values array would exceed <code>T::Native::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#253\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Appends a null slot into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#263\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(\n    &amp;mut self,\n    value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Append an <code>Option</code> value into the builder</p>\n<h5 id=\"panics-1\"><a href=\"#panics-1\">Panics</a></h5>\n<p>Panics if the resulting length of the dictionary values array would exceed <code>T::Native::MAX</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#271\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.DictionaryArray.html\" title=\"struct arrow::array::DictionaryArray\">DictionaryArray</a>&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <code>DictionaryArray</code> and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#288\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow/array/struct.DictionaryArray.html\" title=\"struct arrow::array::DictionaryArray\">DictionaryArray</a>&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <code>DictionaryArray</code> without resetting the builder.</p>\n</div></details></div></details>",0,"arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#33\">source</a><a href=\"#impl-Debug-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#33\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#304-305\">source</a><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;&lt;T as <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>&gt;::<a class=\"associatedtype\" href=\"arrow/datatypes/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow::datatypes::ByteArrayType::Native\">Native</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#308\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;I&gt;(&amp;mut self, iter: I)<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;,</span></h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#376\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#384\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#165-168\">source</a><a href=\"#impl-ArrayBuilder-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T&gt; <a class=\"trait\" href=\"arrow/array/builder/trait.ArrayBuilder.html\" title=\"trait arrow::array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#171\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as an non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#176\">source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + 'static)</h4></section></summary><div class=\"docblock\"><p>Returns the builder as an mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#181\">source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#186\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of array slots in the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#191\">source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#196\">source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;dyn <a class=\"trait\" href=\"arrow/array/trait.Array.html\" title=\"trait arrow::array::Array\">Array</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#240\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow/array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#51-54\">source</a><a href=\"#impl-Default-for-GenericByteDictionaryBuilder%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow/datatypes/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow::datatypes::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    T: <a class=\"trait\" href=\"arrow/datatypes/trait.ByteArrayType.html\" title=\"trait arrow::datatypes::ByteArrayType\">ByteArrayType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_dictionary_builder.rs.html#56\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"arrow/array/builder/struct.GenericByteDictionaryBuilder.html\" title=\"struct arrow::array::builder::GenericByteDictionaryBuilder\">GenericByteDictionaryBuilder</a>&lt;K, T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow::array::builder::StringDictionaryBuilder","arrow::array::builder::LargeStringDictionaryBuilder","arrow::array::builder::BinaryDictionaryBuilder","arrow::array::builder::LargeBinaryDictionaryBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()