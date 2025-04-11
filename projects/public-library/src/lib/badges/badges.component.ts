import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-badges',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './badges.component.html',
	styleUrl: './badges.component.scss',
})
export class BadgesComponent {
	@Input() copy!: string;
	@Input() type!: 'http' | 'response' | 'general';
	@Input() color: 'red' | 'orange' | 'green' | 'blue' = 'blue';
	@Input() size?: 'sm' | 'md' | 'lg';
	@Input() outline = false;
}
