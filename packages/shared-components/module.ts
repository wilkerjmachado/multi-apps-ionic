import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {TesteComponent} from "./teste/teste";

@NgModule({
    declarations: [
        TesteComponent
    ],
    exports: [
        TesteComponent
    ],
    imports: [
        BrowserModule,
        IonicModule
    ]
})
export class SharedComponentsModule {
}