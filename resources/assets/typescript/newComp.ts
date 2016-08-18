import {Component ,Input} from 'angular2/core';

@Component({
    selector: 'inapp',
    templateUrl: 'newcom',
    styles:['h1{font-size:20px;color:red;}']

})


export class NewAppComponent{
    @Input() globstring;

    da= 'Darwiiish';

}