
var elixir = require('laravel-elixir');

var elixirTypscript = require('elixir-typescript');

elixir(function(mix) {

    mix.copy('node_modules/angular2/bundles/angular2-polyfills.js', 'public/js/lib');
    mix.copy('node_modules/angular2/bundles/angular2.dev.js', 'public/js/lib');
    mix.copy('node_modules/rxjs/bundles/Rx.js', 'public/js/lib');
    mix.copy('node_modules/systemjs/dist/system-polyfills.js', 'public/js/lib');
    mix.copy('node_modules/systemjs/dist/system.src.js', 'public/js/lib');
    mix.copy('node_modules/es6-shim/es6-shim.min.js', 'public/js/lib');
    mix.copy('node_modules/zone.js', 'public/js/lib');

    mix.typescript(
        [
            'app-component.ts',
            'boot.ts',
            'newComp.ts'
        ],
        'public/js/',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );

});