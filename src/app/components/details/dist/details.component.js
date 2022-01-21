"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailsComponent = void 0;
var core_1 = require("@angular/core");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(activatedRoute, httpService) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.gameRating = 0;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.activatedRoute.params.subscribe(function (params) {
            _this.gameId = params['id'];
            _this.getGameDetails(_this.gameId);
        });
    };
    DetailsComponent.prototype.getGameDetails = function (id) {
        var _this = this;
        this.gameSub = this.httpService
            .getGameDetails(id)
            .subscribe(function (gameResp) {
            _this.game = gameResp;
            setTimeout(function () {
                _this.gameRating = _this.game.metacritic;
            }, 1000);
        });
    };
    DetailsComponent.prototype.getColor = function (value) {
        if (value > 75) {
            return '#5ee432';
        }
        else if (value > 50) {
            return '#fffa50';
        }
        else if (value > 30) {
            return '#f7aa38';
        }
        else {
            return '#ef4655';
        }
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        if (this.gameSub) {
            this.gameSub.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.scss']
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
