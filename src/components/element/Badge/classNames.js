const classNames = function () {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    var classes = {};

    for (var i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        // 如果arg 是false，0，null，undefined 跳过此次循环
        if (!arg || (arg && !arg instanceof Object)) {
            continue;
        }
        for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
                classes[key] = arg[key];
            }
        }
    }
    return classes;
};
export default classNames;
