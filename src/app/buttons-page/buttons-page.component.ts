import { Component } from '@angular/core';
import { ButtonsComponent } from 'public-library';

@Component({
	selector: 'app-buttons-page',
	standalone: true,
	imports: [ButtonsComponent],
	templateUrl: './buttons-page.component.html',
	styleUrl: './buttons-page.component.scss',
})
export class ButtonsPageComponent {}
