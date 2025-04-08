import { Component } from '@angular/core';
import { ButtonsComponent } from 'public-library';

@Component({
	selector: 'app-buttons-page',
	standalone: true,
	imports: [ButtonsComponent],
	templateUrl: './buttons-page.component.html',
	styleUrl: './buttons-page.component.scss',
})
export class ButtonsPageComponent {
	myFunction(str: string) {
		console.log(
			`%c!!! Clicked ${str} !!!`,
			'color: white; font-weight: bold; background-color: #ff0000; padding:2px; border-radius: 2px;'
		);
	}
}
