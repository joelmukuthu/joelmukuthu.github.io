/**
 * angular-wheelie
 * Version: 1.1.0
 * (c) 2014-2016 Joel Mukuthu
 * MIT License
 * Built on: 16-07-2016 00:30:42 GMT+0200
 **/

angular.module('wheelie', []);

angular
.module('wheelie')
.factory('wheelie', [function () {
    return {
        bind: function (element, callbacks) {
            callbacks = callbacks || {};
            if (angular.isDefined(callbacks.up) && !angular.isFunction(callbacks.up)) {
                throw new Error('The \'up\' callback must be a function');
            }
            if (angular.isDefined(callbacks.down) && !angular.isFunction(callbacks.down)) {
                throw new Error('The \'down\' callback must be a function');
            }
            if (!angular.isDefined(callbacks.up) && !angular.isDefined(callbacks.down)) {
                throw new Error('At least one callback (\'up\' or \'down\') must be provided');
            }

            function bindWheel(e) {
                if (e.originalEvent) {
                    e = e.originalEvent;
                }
                var delta;
                delta = Math.max(-1, Math.min(1, (e.wheelDelta || -(e.deltaY || e.detail))));
                if (isNaN(delta) || delta === 0) {
                    return;
                }
                if (delta > 0) {
                    if (callbacks.up) {
                        callbacks.up(e);
                    }
                } else {
                    if (callbacks.down) {
                        callbacks.down(e);
                    }
                }
            }

            element.data('___wheelie_bindWheel___', bindWheel);
            element.on('wheel mousewheel onmousewheel', bindWheel);
        },

        unbind: function (element) {
            var bindWheel = element.data('___wheelie_bindWheel___');
            if (angular.isFunction(bindWheel)) {
                element.data('___wheelie_bindWheel___', null);
                element.off('wheel mousewheel onmousewheel', bindWheel);
            }
        }
    };
}]);
