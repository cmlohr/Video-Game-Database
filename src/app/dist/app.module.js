"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var http_headers_interceptor_1 = require("./interceptors/http-headers.interceptor");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var angular_gauge_1 = require("angular-gauge");
var tabs_1 = require("@angular/material/tabs");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var forms_1 = require("@angular/forms");
var search_bar_component_1 = require("./components/search-bar/search-bar.component");
var home_component_1 = require("./components/home/home.component");
var http_errors_interceptor_1 = require("./interceptors/http-errors.interceptor");
// import { AppComponent } from './app.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                search_bar_component_1.SearchBarComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                angular_gauge_1.GaugeModule.forRoot(),
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                tabs_1.MatTabsModule,
                icon_1.MatIconModule,
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_headers_interceptor_1.HttpHeadersInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_errors_interceptor_1.HttpErrorsInterceptor,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
