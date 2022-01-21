"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getGameList = function (ordering, search) {
        var params = new http_1.HttpParams().set('ordering', ordering);
        if (search) {
            params = new http_1.HttpParams().set('ordering', ordering).set('search', search);
        }
        return this.http.get(environment_1.environment.BASE_URL + "/games", {
            params: params
        });
    };
    HttpService.prototype.getGameDetails = function (id) {
        var gameInfoRequest = this.http.get(environment_1.environment.BASE_URL + "/games/" + id);
        var gameTrailersRequest = this.http.get(environment_1.environment.BASE_URL + "/games/" + id + "/movies");
        var gameScreenshotsRequest = this.http.get(environment_1.environment.BASE_URL + "/games/" + id + "/screenshots");
        return rxjs_1.forkJoin({
            gameInfoRequest: gameInfoRequest,
            gameScreenshotsRequest: gameScreenshotsRequest,
            gameTrailersRequest: gameTrailersRequest
        }).pipe(operators_1.map(function (resp) {
            var _a, _b;
            return __assign(__assign({}, resp['gameInfoRequest']), { screenshots: (_a = resp['gameScreenshotsRequest']) === null || _a === void 0 ? void 0 : _a.results, trailers: (_b = resp['gameTrailersRequest']) === null || _b === void 0 ? void 0 : _b.results });
        }));
    };
    HttpService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
