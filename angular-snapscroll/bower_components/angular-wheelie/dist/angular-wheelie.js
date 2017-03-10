/**
 * angular-wheelie
 * Version: 3.0.1
 * (c) 2016-2017 Joel Mukuthu
 * MIT License
 * Built on: 06-03-2017 12:12:32 GMT+0100
 **/

if (typeof exports === 'object') {
    module.exports = 'wheelie';
}

angular.module('wheelie', []);

angular.module('wheelie').factory('wheelie', [function () {
    var isDefined = angular.isDefined;
    var isFunction = angular.isFunction;

    return {
        bind: function (element, callbacks, ignoreClassName) {
            callbacks = callbacks || {};

            if (isDefined(callbacks.up) && !isFunction(callbacks.up)) {
                throw new Error('The \'up\' callback must be a function');
            }
            if (isDefined(callbacks.down) && !isFunction(callbacks.down)) {
                throw new Error('The \'down\' callback must be a function');
            }
            if (isDefined(callbacks.left) && !isFunction(callbacks.left)) {
                throw new Error('The \'left\' callback must be a function');
            }
            if (isDefined(callbacks.right) && !isFunction(callbacks.right)) {
                throw new Error('The \'right\' callback must be a function');
            }
            if (!isDefined(callbacks.up) &&
                !isDefined(callbacks.down) &&
                !isDefined(callbacks.left) &&
                !isDefined(callbacks.right)) {
                throw new Error(
                    'At least one callback (\'up\', \'down\', \'left\' or \'right\') must be provided'
                );
            }

            function bindWheel(e) {
                if (e.originalEvent) {
                    e = e.originalEvent;
                }

                if (ignoreClassName &&
                    angular.element(e.target).hasClass(ignoreClassName)) {
                    return;
                }

                if (e.deltaX) {
                    e.deltaX < 0 && callbacks.left && callbacks.left(e);
                    e.deltaX > 0 && callbacks.right && callbacks.right(e);
                }

                if (e.deltaY) {
                    e.deltaY < 0 && callbacks.up && callbacks.up(e);
                    e.deltaY > 0 && callbacks.down && callbacks.down(e);
                }
            }

            element.data('___wheelie_bindWheel___', bindWheel);
            element.on('wheel', bindWheel);
        },

        unbind: function (element) {
            var bindWheel = element.data('___wheelie_bindWheel___');
            if (isFunction(bindWheel)) {
                element.data('___wheelie_bindWheel___', null);
                element.off('wheel', bindWheel);
            }
        }
    };
}]);
