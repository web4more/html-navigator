# Node Navigator
Node.js navigator api

# Installing

```sh
$ npm install --save node-navigator
```

# Example

```js
const { Navigator } = require("node-navigator");
const navigator = new Navigator();

navigator.geolocation.getCurrentPosition((success, error) => {
    if (error) console.error(error);
    else console.log(success);
});

/*
{
  accuracy: null,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: 69.6969,
  longitude: 69.6969,
  speed: null,
  timestamp: 1609918525820
}
*/
```