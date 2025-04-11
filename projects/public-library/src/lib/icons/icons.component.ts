import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-icons',
	standalone: true,
	imports: [],
	templateUrl: './icons.component.html',
	styleUrl: './icons.component.scss',
})
export class IconsComponent {
	@Input() name!:
		| 'connect'
		| 'pay'
		| 'enrich'
		| 'outbound'
		| 'home'
		| 'slash'
		| 'menu'
		| 'changelog'
		| 'all'
		| 'code'
		| 'book'
		| 'reset'
		| 'copy'
		| 'check'
		| 'warning'
		| 'info'
		| 'rocket'
		| 'support'
		| 'search'
		| 'success'
		| 'link'
		| 'chevron-left'
		| 'chevron-right'
		| 'arrow-left'
		| 'arrow-right'
		| 'close'
		| 'chevron-up'
		| 'chevron-down'
		| 'api'
		| 'loan'
		| 'bank'
		| 'doc'
		| 'funding'
		| 'insights'
		| 'job'
		| 'face-id'
		| 'logo-desktop-v1'
		| 'logo-mobile-v1'
		| 'logo-desktop-v2'
		| 'logo-mobile-v2'
		| 'logo-desktop-v3'
		| 'logo-mobile-v3';
	@Input() height = '24px';
	@Input() width = '24px';
}
