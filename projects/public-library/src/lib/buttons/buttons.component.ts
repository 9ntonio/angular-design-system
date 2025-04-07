import { Component, Input } from '@angular/core';

@Component({
	selector: 'lib-buttons',
	standalone: true,
	imports: [],
	templateUrl: './buttons.component.html',
	styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
	@Input() copy!: string;
	@Input() type: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon' =
		'primary';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() _disabled: boolean = false;
	@Input() iconPosition: 'left' | 'right' | null = null;
}
