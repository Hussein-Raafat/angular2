System.register(['angular2/core', './newComp'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var core_1, newComp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newComp_1_1) {
                newComp_1 = newComp_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.jsondata = [{
                            id: 1,
                            name: 'ramos'
                        },
                        {
                            id: 2,
                            name: 'nadal'
                        }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [newComp_1.NewAppComponent],
                        templateUrl: 'com',
                        styles: ['h1{font-size:20px;color:blue;}']
                    })
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map