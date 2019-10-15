"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circular_slider_common_1 = require("./circular-slider.common");
var CircularSliderView = (function (_super) {
    __extends(CircularSliderView, _super);
    function CircularSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularSliderView.prototype.onLoaded = function () {
        console.log("TCL: CircularSlider -> onLoaded -> onLoaded");
        _super.prototype.onLoaded.call(this);
    };
    CircularSliderView.prototype.createNativeView = function () {
        console.log("TCL: CircularSlider -> createNativeView");
        var container = new UIView(CGRectMake(0, 0, 400, 400));
        container.backgroundColor = new UIColor({ white: 1, alpha: 0 });
        var slider = new RangeCircularSlider(CGRectMake(0, 0, 200, 200));
        slider.backgroundColor = new UIColor({ white: 1, alpha: 0 });
        container.addSubview(slider);
        console.log("TCL: CircularSlider -> initNativeView -> end");
        container.id = "tainer";
        console.log("TCL: CircularSliderView -> createNativeView -> container.id", container.id);
        return container;
    };
    CircularSliderView.prototype.onUnloaded = function () {
        console.log("TCL: CircularSlider -> onUnloaded -> onUnloaded");
        _super.prototype.onUnloaded.call(this);
    };
    CircularSliderView.prototype.disposeNativeView = function () {
        console.log("TCL: CircularSlider -> disposeNativeView -> disposeNativeView");
    };
    CircularSliderView.prototype.initNativeView = function () {
        console.log("TCL: CircularSlider -> initNativeView");
        this.nativeView.owner = this;
        _super.prototype.initNativeView.call(this);
    };
    return CircularSliderView;
}(circular_slider_common_1.CircularViewBase));
exports.CircularSliderView = CircularSliderView;
//# sourceMappingURL=circular-slider.ios.js.map