# angular-wheelie
[![Build Status](https://travis-ci.org/joelmukuthu/angular-wheelie.svg?branch=master)](https://travis-ci.org/joelmukuthu/angular-wheelie) [![Dependency Status](https://david-dm.org/joelmukuthu/angular-wheelie.svg)](https://david-dm.org/joelmukuthu/angular-wheelie) [![Licence](https://img.shields.io/npm/l/angular-wheelie.svg)](https://github.com/joelmukuthu/angular-wheelie/blob/master/LICENSE.md) [![Coverage Status](https://coveralls.io/repos/github/joelmukuthu/angular-wheelie/badge.svg?branch=master)](https://coveralls.io/github/joelmukuthu/angular-wheelie?branch=master) [![Bower version](https://img.shields.io/bower/v/angular-wheelie.svg)](https://github.com/joelmukuthu/angular-wheelie) [![npm version](https://img.shields.io/npm/v/angular-wheelie.svg)](https://www.npmjs.com/package/angular-wheelie)

angular-wheelie exposes a service that allows you to bind wheel events to an
angular element.

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
    // To listen for wheel events:
    wheelie.bind(target, {
        up: function (event) {
            console.log('wheel up on element #someElement!');
            // to prevent scrolling, use event.preventDefault();
        },
        right: function (event) { // i.e. with a trackpad
            console.log('wheel right on element #someElement!');
        },
        down: function (event) {
            console.log('wheel down on element #someElement!');
        },
        left: function (event) { // i.e. with a trackpad
            console.log('wheel left on element #someElement!');
        }
    });
    // To unbind:
    $scope.on('$destroy', function () {
        wheelie.unbind(target);
    });
}]);
```

Not all callbacks are required, but at least one must be provided.

In the above example, all wheel events from `#someElement` will trigger one of
the callbacks. To ignore wheel events from a nested element, pass the nested
element's class-name as the third parameter:

```javascript
app.controller('MyController', [ '$scope', 'wheelie', function ($scope, wheelie) {
    var target = angular.element('#someElement');
    var callbacks = { /* up, right, down, left callbacks */ };
    var classNameToIgnore = 'some-nested-elements';
    wheelie.bind(target, callbacks, classNameToIgnore);
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
