"use strict";
exports.__esModule = true;
var EXIT_STATUS = (function () {
    function EXIT_STATUS() {
    }
    return EXIT_STATUS;
}());
EXIT_STATUS.OK = 0;
EXIT_STATUS.BAD_COMMAND = 1;
EXIT_STATUS.PARSE_CLASS_ERROR = 2;
EXIT_STATUS.WEBPACK_COMPILE_ERROR = 3;
EXIT_STATUS.BROKEN_ENV = 127;
exports.EXIT_STATUS = EXIT_STATUS;
