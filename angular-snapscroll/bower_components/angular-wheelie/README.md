# angular-wheelie
[![Build Status](https://travis-ci.org/joelmukuthu/angular-wheelie.svg?branch=master)](https://travis-ci.org/joelmukuthu/angular-wheelie) [![Dependency Status](https://david-dm.org/joelmukuthu/angular-wheelie.svg)](https://david-dm.org/joelmukuthu/angular-wheelie) [![Licence](https://img.shields.io/npm/l/angular-wheelie.svg)](https://github.com/joelmukuthu/angular-wheelie/blob/master/LICENSE.md) [![Coverage Status](https://coveralls.io/repos/github/joelmukuthu/angular-wheelie/badge.svg?branch=master)](https://coveralls.io/github/joelmukuthu/angular-wheelie?branch=master) [![Bower version](https://img.shields.io/bower/v/angular-wheelie.svg)](https://github.com/joelmukuthu/angular-wheelie) [![npm version](https://img.shields.io/npm/v/angular-wheelie.svg)](https://www.npmjs.com/package/angular-wheelie)

angular-wheelie exposes a service that allows you to bind mousewheel events to
an angular element.

### Installation
Install with bower:
```sh
bower install angular-wheelie
```
Or with npm:
```sh
npm install angular-wheelie
```
Or simply download the [latest release](https://github.com/joelmukuthu/angular-wheelie/releases/latest).

### Usage
The pre-built files can be found in the `dist/` directory.
`dist/angular-wheelie.min.js` is minified and production-ready. Example usage:
```html
<script src="dist/angular-wheelie.min.js"></script>
```
Add `wheelie` to your app's module dependencies:
```javascript
angular.module('myapp', ['wheelie']);
```
And now you can use the `wheelie` service in your controllers, directives,
services etc. Example usage in a controller:
```javascript
app.controller('MyController', [ '$scope', 'wheelie', function ($scope, wheelie) {
    var target = angular.element('#someElement');
    // To listen for mousewheel events
    wheelie.bind(target, {
        up: function (event) {
            console.log('mousewheel up on element #someElement!');
        },
        down: function (event) {
            console.log('mousewheel down on element #someElement!');
            // to prevent scrolling, use event.preventDefault();
        }
    });
    // To unbind:
    $scope.on('$destroy', function () {
        wheelie.unbind(target);
    });
}]);
```

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
