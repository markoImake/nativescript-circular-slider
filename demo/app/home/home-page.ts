import { View } from 'tns-core-modules/ui/core/view';
import { Label } from 'tns-core-modules/ui/label';
import { Color } from 'tns-core-modules/color';

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    console.log("TCL: onNavigatingTo -> onNavigatingTo");
    const page = <Page>args.object;
    const mainGrid : View = page.getViewById('main');

    var label = new Label();
    label.text = "dynamic";
    // mainGrid.addChild(label);
    console.log("TCL: onNavigatingTo -> mainGrid", mainGrid);
    page.bindingContext = new HomeViewModel();
}

export function sliderLoaded(args: any) {
    console.log("TCL: sliderLoaded -> sliderLoaded");
    const sliderview = args.object;
    console.log("TCL: sliderLoaded -> sliderview", sliderview);
}