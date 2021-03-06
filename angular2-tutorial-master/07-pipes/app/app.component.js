"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('./shared/index');
var PizzaAppComponent = (function () {
    function PizzaAppComponent() {
    }
    PizzaAppComponent = __decorate([
        core_1.Component({
            selector: 'pizza-app',
            pipes: [index_1.AddTwoPipe],
            template: "\n    <span>{{10.99 | currency}}</span>\n    <span>{{10.99 | currency:'EUR':true}}</span>\n    <div>{{1 | addTwo}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaAppComponent);
    return PizzaAppComponent;
}());
exports.PizzaAppComponent = PizzaAppComponent;
//# sourceMappingURL=app.component.js.map