import { Observable } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view';
export declare class Common extends Observable {
    message: string;
    constructor();
    greet(): string;
}
export declare class CircularViewBase extends View {
    marko: string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
