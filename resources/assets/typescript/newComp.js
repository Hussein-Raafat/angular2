System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var core_1;
    var NewAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewAppComponent = (function () {
                function NewAppComponent() {
                    this.da = 'Darwiiish';
                }
                __decorate([
                    core_1.Input()
                ], NewAppComponent.prototype, "globstring");
                NewAppComponent = __decorate([
                    core_1.Component({
                        selector: 'inapp',
                        templateUrl: 'newcom',
                        styles: ['h1{font-size:20px;color:red;}']
                    })
                ], NewAppComponent);
                return NewAppComponent;
            })();
            exports_1("NewAppComponent", NewAppComponent);
        }
    }
});
//# sourceMappingURL=newComp.js.map