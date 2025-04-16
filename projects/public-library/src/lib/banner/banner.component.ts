import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
	selector: 'lib-banner',
	standalone: true,
	imports: [CommonModule, ButtonsComponent, IconsComponent],
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.css',
})
export class BannerComponent {
	@Input() copy!: string;
	@Input() title!: string;
	@Input() type: 'light' | 'dark' = 'light';
	@Input() button: boolean = false;
	@Input() buttonCopy?: string;
	@Input() close: boolean = false;
	@Output() clicked = new EventEmitter<void>();

	closeBanner() {
		console.log('close');
	}
}
