# angular-snapscroll v0.2.2 [![Build Status](https://travis-ci.org/joelmukuthu/angular-snapscroll.svg?branch=master)](https://travis-ci.org/joelmukuthu/angular-snapscroll) [![Coverage Status](https://coveralls.io/repos/joelmukuthu/angular-snapscroll/badge.svg)](https://coveralls.io/r/joelmukuthu/angular-snapscroll)
[AngularJS](http://angularjs.org) provides scroll-and-snap functionality for vertical scrolling, similar to [fullPage.js](http://alvarotrigo.com/fullPage/).

- JS-only implementation
- Only requires angular core
- 5.5kB when minified, 2.0kB when gzipped

### Demo
[Demo site](http://joelmukuthu.github.io/angular-snapscroll/)

### Installation
Install with bower:
```sh
bower install angular-snapscroll
```
And link to the main JS file:
```html
<script src="/bower_components/angular-snapscroll/dist/angular-snapscroll.js"></script>
```
Or download/clone this repo then link to the main JS file.

### Usage
Include the snapscroll module as a dependency in your app:
```javascript
angular.module('myapp', ['snapscroll']);
```
And add `snapscroll` as an attribute to any element to make it snap-scrollable! The element would have a scrollbar to begin with, the idea being that with the `snapscroll` attribute you're adding scroll-and-snap behaviour to an element that is otherwise scrollable:
```html
<div style="height: 200px;" snapscroll="">
    <div></div>
    <div></div>
    <div></div>
</div>
```
All you need to set is the height of the element and the directive will take care of the rest. However, to have the element fill the browser viewport:
```html
<div snapscroll="" fit-window-height="">
    <div></div>
    <div></div>
    <div></div>
</div>
```

### Mobile support
To add support for mobile (swipe-and-snap), you only need to listen for the vertical swipe events and pass those on to angular-snapscroll. For example, using [angular-swipe](https://github.com/marmorkuchen-net/angular-swipe):
```html
<div style="height: 200px;" ng-init="snapIndex=0" snapscroll="" snap-index="snapIndex" ng-swipe-up="snapIndex=snapIndex+1" ng-swipe-down="snapIndex=snapIndex-1">
    <div></div>
    <div></div>
    <div></div>
</div>
```
See the [demo](http://joelmukuthu.github.io/angular-snapscroll/#1) for an example of how to keep swipe events localized when you have nested snapscrolls.

### Documentation
For more examples, check out the [demo site](http://joelmukuthu.github.io/angular-snapscroll/) and for all the configuration options, have a look at the [docs](DOCS.md).

### Contributing
Contributions wanted! See the [contribution guidelines](CONTRIBUTING.md).

[Grunt](http://gruntjs.com) is used for fast development and testing. To set up your working environment, download the repo and run:
```sh
npm install && bower install
```
Then to continuously watch files and run tests as you code:
```sh
grunt
```
Check out the [Gruntfile](Gruntfile.js) for more grunt tasks (test, build etc).

### Todo's
- snapscroll as an element - would allow use of templates and ngAnimate for animations. Currently this repo has a (rather outdated) 'as-element' branch for this.
- more browser tests

### License
[The MIT License](LICENSE.md)
