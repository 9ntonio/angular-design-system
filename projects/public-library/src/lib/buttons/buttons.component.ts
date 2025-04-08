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
	@Input() iconCopy: string = 'Copy to clipboard';
	@Input() type: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon' =
		'primary';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() disabled: boolean = false;
	@Input() iconPosition: 'left' | 'right' | undefined = undefined;

	private timeoutId: number | null = null;

	copyToClipboard() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
		this.iconCopy = 'Copied!';
		this.timeoutId = window.setTimeout(() => {
			this.iconCopy = 'Copy to clipboard';
			this.timeoutId = null;
		}, 2000);
	}
}
