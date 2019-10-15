import { Common, CircularViewBase } from './circular-slider.common';
import { View } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';

declare var CGRectMake, UIView, RangeCircularSlider, CircularSlider, util;
export class CircularSliderView extends CircularViewBase {

    public onLoaded() {
        console.log("TCL: CircularSlider -> onLoaded -> onLoaded");
        super.onLoaded();
    }

    public createNativeView() {
        console.log("TCL: CircularSlider -> createNativeView");
        const container = new UIView(CGRectMake(0, 0, 400, 400));
        container.backgroundColor = new UIColor({ white: 1, alpha: 0 });

        const slider = new RangeCircularSlider(CGRectMake(0, 0, 200, 200));
        slider.backgroundColor = new UIColor({ white: 1, alpha: 0 });//new Color('transparent').ios;
        container.addSubview(slider);
        // slider.backgroundColor = new Color('transparent').ios;
        // console.dir(slider, {'maxArrayLength': 200} );
        // console.log(slider.backgroundColor);
        
        console.log("TCL: CircularSlider -> initNativeView -> end");
        container.id = "tainer";
        console.log("TCL: CircularSliderView -> createNativeView -> container.id", container.id);
        return container;
    }

    public onUnloaded() {
        console.log("TCL: CircularSlider -> onUnloaded -> onUnloaded");
        super.onUnloaded();
    }

    public disposeNativeView() {
        console.log("TCL: CircularSlider -> disposeNativeView -> disposeNativeView");
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        console.log("TCL: CircularSlider -> initNativeView");
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();


    }



    // transfer JS text value to nativeView.
    // [textProperty.setNative](value: string) {
    //     this.nativeView.setText(value);
    // }


}
