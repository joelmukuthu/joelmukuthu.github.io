# angular-scrollie
[![Build Status](https://travis-ci.org/joelmukuthu/angular-scrollie.svg?branch=master)](https://travis-ci.org/joelmukuthu/angular-scrollie) [![Dependency Status](https://david-dm.org/joelmukuthu/angular-scrollie.svg)](https://david-dm.org/joelmukuthu/angular-scrollie) [![Licence](https://img.shields.io/npm/l/angular-scrollie.svg)](https://github.com/joelmukuthu/angular-scrollie/blob/master/LICENSE.md) [![Coverage Status](https://coveralls.io/repos/github/joelmukuthu/angular-scrollie/badge.svg?branch=master)](https://coveralls.io/github/joelmukuthu/angular-scrollie?branch=master) [![Bower version](https://img.shields.io/bower/v/angular-scrollie.svg)](https://github.com/joelmukuthu/angular-scrollie) [![npm version](https://img.shields.io/npm/v/angular-scrollie.svg)](https://www.npmjs.com/package/angular-scrollie)

angular-scrollie exposes a service that allows you to set or animate the `scrollTop`
of an angular element. Uses `requestAnimationFrame` to provide smooth animations
and even polyfills it for old browsers.

### Installation
Install with bower:
```sh
bower install angular-scrollie
```
Or with npm:
```sh
npm install angular-scrollie
```
Or simply download the [latest release](https://github.com/joelmukuthu/angular-scrollie/releases/latest).

### Usage
The pre-built files can be found in the `dist/` directory.
`dist/angular-scrollie.min.js` is minified and production-ready. Example usage:
```html
<script src="dist/angular-scrollie.min.js"></script>
```
Add `scrollie` to your app's module dependencies:
```javascript
angular.module('myapp', ['scrollie']);
```
And now you can use the `scrollie` service in your controllers, directives,
services etc. Example usage in a controller:
```javascript
app.controller('MyController', [ '$scope', 'scrollie', function ($scope, scrollie) {
    var target = angular.element('#someElement');
    // To set scrollTop without animation
    scrollie.to(element, 10).then(function () {
        console.log('Called in next tick');
    });
    // For animated scrolling in 400ms using easeInOutQuad easing
    scrollie.to(element, 10, 400).then(function () {
        console.log('Called after 400ms');
    });
    // To stop a currently running animation:
    scrollie.stop(element);
}]);
```

### API
#### scrollie.to(element, scrollTop [, duration [, easing]]) : Promise
Animates the scrollTop of `element` from it's current `scrollTop` to the new
`scrollTop` in a time-frame of `duration` and using the provided `easing`
function (`duration` and `easing` are optional).

It returns a `$q` promise object which is resolved when the animation is
complete and is rejected if the animation is stopped.

If `duration` is not provided or is not valid, then it sets the `scrollTop`
without animating. Note that a promise is still returned but it gets fulfilled
in the next tick.

If no `easing` is provided and `duration` is provided then the default easing
function used is `easeInOutQuad`.

Calling `scrollie.to` on an element while an animation is currently ongoing will
stop that animation and start a new one. Subsequently, the promise for that
animation will be rejected.

#### scrollie.stop(element)
Stops any currently-running animation of `scrollTop` on `element`. stopping the
animation results in rejecting the promise returned by `scrollie.to`.

### Contributing
Contributions are welcomed! Here are the [contribution guidelines](CONTRIBUTING.md).

First clone the repository and install dependencies:
```sh
npm install
```
To run tests:
```sh
npm test
```
To lint the code:
```sh
npm run lint
```
To make a production build:
```sh
npm run build
```

### License
[The MIT License](LICENSE.md)
