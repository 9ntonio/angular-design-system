import { Component } from '@angular/core';
import { CalloutComponent, BannerComponent } from 'public-library';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-callout-page',
	standalone: true,
	imports: [CalloutComponent, BannerComponent, CommonModule],
	templateUrl: './callout-page.component.html',
	styleUrl: './callout-page.component.scss',
})
export class CalloutPageComponent {
	registerNow() {
		console.log('register now');
	}
}
