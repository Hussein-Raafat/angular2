import {Component} from 'angular2/core';
import {NewAppComponent} from './newComp';

@Component({
    selector: 'my-app',
    directives:[NewAppComponent],
    templateUrl: 'com',
    styles:['h1{font-size:20px;color:blue;}']

})


export class AppComponent{
    jsondata=[{
        id:1,
        name:'ramos'
    },
        {
            id:2,
            name:'nadal'
        }
    ]
}
