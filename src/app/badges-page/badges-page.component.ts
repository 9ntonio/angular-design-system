import { Component } from '@angular/core';
import { BadgesComponent } from 'public-library';

@Component({
	selector: 'lib-badges-page',
	standalone: true,
	imports: [BadgesComponent],
	templateUrl: './badges-page.component.html',
	styleUrl: './badges-page.component.scss',
})
export class BadgesPageComponent {}
