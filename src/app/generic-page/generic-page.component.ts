import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-generic-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './generic-page.component.html',
	styleUrl: './generic-page.component.scss',
})
export class GenericPageComponent {}

