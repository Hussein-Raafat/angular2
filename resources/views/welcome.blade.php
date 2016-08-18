<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <!-- 1. Load libraries -->



        <script src="{{asset('js/lib/es6-shim.min.js')}}"></script>
        <script src="{{asset('js/lib/system-polyfills.js')}}"></script>
        <script src="{{asset('js/lib/angular2-polyfills.js')}}"></script>
        <script src="{{asset('js/lib/system.src.js')}}"></script>
        <script src="{{asset('js/lib/Rx.js')}}"></script>
        <script src="{{asset('js/lib/angular2.dev.js')}}"></script>
        <script>
            System.config({
                packages: {
                    js: {
                        format: 'register',
                        defaultExtension: 'js'
                    }
                }
            });
            System.import('js/boot')
                    .then(null, console.error.bind(console));
        </script>
        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <my-app>loading...</my-app>
            </div>
        </div>
    </body>
</html>
