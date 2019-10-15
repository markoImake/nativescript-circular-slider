import { Observable } from "tns-core-modules/data/observable";
import { CircularSlider } from 'nativescript-circular-slider';

export class HomeViewModel extends Observable {
    constructor() {
        super();
        console.log("TCL: HomeViewModel -> constructor -> constructor");
        // console.log("TCL: HomeViewModel -> constructor -> slider", slider.nativeView);
    }
}
