import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [
    ]
})
export class HeaderComponent {

    @Input()
    showNavigation: boolean = true;
}
