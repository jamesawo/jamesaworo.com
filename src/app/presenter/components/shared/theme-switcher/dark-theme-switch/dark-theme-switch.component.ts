import { Component } from '@angular/core';

@Component({
    selector: 'app-dark-switch',
    template: `
	<button class="text-gray-700 w-6"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"
		fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
	</svg></button>`
})
export class DarkThemeSwitchComponent {
}
