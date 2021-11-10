"use strict";
exports.__esModule = true;
exports.Fund = void 0;
var Fund = /** @class */ (function () {
    function Fund(src, title, description) {
        this.logoSrc = src;
        this.title = title;
        this.description = description;
    }
    Fund.prototype.setFundField = function (arg) {
        // @ts-ignore
        this[arg.varName] = arg.value;
        console.log(this);
    };
    return Fund;
}());
exports.Fund = Fund;
