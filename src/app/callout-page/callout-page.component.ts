import { Component } from '@angular/core';
import { CalloutComponent } from 'public-library';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-callout-page',
	standalone: true,
	imports: [CalloutComponent, CommonModule],
	templateUrl: './callout-page.component.html',
	styleUrl: './callout-page.component.scss',
})
export class CalloutPageComponent {}
