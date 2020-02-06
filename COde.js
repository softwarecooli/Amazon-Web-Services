if(1 == "1")
//Its returns true because it's an auto-type conversion and it checks only value not type.

if(1 === "1")
//Its returns false because it's not auto-type conversion and it checks value and types both.

if(1=== parseInt("1"))
// its returns true.
// alert(0 == false); // return true, because both are same type.
// alert(0 === false); // return false, because both are of a different type.
// alert(1 == "1"); // return true, automatic type conversion for value only.
// alert(1 === "1"); // return false, because both are of a different type.
// alert(null == undefined); // return true.
// alert(null === undefined); // return false.
// alert('0' == false); // return true.
// alert('0' === false); // return false.
// alert(1=== parseInt("1")); // return true.
