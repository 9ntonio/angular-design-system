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
		| 'face-id';
	@Input() height = '40px';
	@Input() width = '40px';
}
