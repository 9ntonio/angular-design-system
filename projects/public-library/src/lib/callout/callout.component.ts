import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
	selector: 'lib-callout',
	standalone: true,
	imports: [CommonModule, IconsComponent],
	templateUrl: './callout.component.html',
	styleUrl: './callout.component.css',
})
export class CalloutComponent {
	@Input() type: 'info' | 'success' | 'warning' = 'info';
	@Input() header: string | null = null;
	@Input() copy!: string;
}
