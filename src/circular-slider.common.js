"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var app = require("tns-core-modules/application");
var dialogs = require("tns-core-modules/ui/dialogs");
var view_1 = require("tns-core-modules/ui/core/view");
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        var _this = _super.call(this) || this;
        _this.message = Utils.SUCCESS_MSG();
        return _this;
    }
    Common.prototype.greet = function () {
        return "Hello, NS";
    };
    return Common;
}(observable_1.Observable));
exports.Common = Common;
var CircularViewBase = (function (_super) {
    __extends(CircularViewBase, _super);
    function CircularViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CircularViewBase;
}(view_1.View));
exports.CircularViewBase = CircularViewBase;
var Utils = (function () {
    function Utils() {
    }
    Utils.SUCCESS_MSG = function () {
        var msg = "Your plugin is working on " + (app.android ? 'Android' : 'iOS') + ".";
        setTimeout(function () {
            dialogs.alert(msg + " For real. It's really working :)").then(function () { return console.log("Dialog closed."); });
        }, 2000);
        return msg;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=circular-slider.common.js.map