# hashj
Java hascode functions for Nodejs

Java string hashcode:
```js
const hashj = require('hashj');

// Equivalent to java.lang.String#hashCode function in Java.
const hashCode = hashj.jHashCode('javascript');
```

Java UUID hashcode:
```js
const hashj = require('hashj');

// Equivalent to java.util.UUID#hashCode function in Java.
const hashCode = hashj.jUUIDHashCode('90903f27-e36e-4e6f-996a-124c58365b43');
```
