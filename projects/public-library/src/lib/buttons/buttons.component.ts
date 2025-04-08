import { Component, Input } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'lib-buttons',
	standalone: true,
	imports: [IconsComponent, CommonModule],
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
	@Input() copy!: string;
	@Input() type: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon' =
		'primary';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() _disabled: boolean = false;
	@Input() iconPosition: 'left' | 'right' | undefined = undefined;
}
