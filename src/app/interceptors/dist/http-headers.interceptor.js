"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpHeadersInterceptor = void 0;
var core_1 = require("@angular/core");
var HttpHeadersInterceptor = /** @class */ (function () {
    function HttpHeadersInterceptor() {
    }
    HttpHeadersInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'd847d0e554mshf6d288d6a955241p129d20jsn87f02cb940a9',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: 'b178848cd9fb42ae85674dc173ec32e6'
            }
        });
        return next.handle(req);
    };
    HttpHeadersInterceptor = __decorate([
        core_1.Injectable()
    ], HttpHeadersInterceptor);
    return HttpHeadersInterceptor;
}());
exports.HttpHeadersInterceptor = HttpHeadersInterceptor;
