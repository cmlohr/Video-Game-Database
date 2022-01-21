"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GameTabsComponent = void 0;
var core_1 = require("@angular/core");
var GameTabsComponent = /** @class */ (function () {
    function GameTabsComponent() {
    }
    GameTabsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], GameTabsComponent.prototype, "game");
    GameTabsComponent = __decorate([
        core_1.Component({
            selector: 'app-game-tabs',
            templateUrl: './game-tabs.component.html',
            styleUrls: ['./game-tabs.component.scss']
        })
    ], GameTabsComponent);
    return GameTabsComponent;
}());
exports.GameTabsComponent = GameTabsComponent;
