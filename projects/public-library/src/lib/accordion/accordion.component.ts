import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BadgesComponent } from '../badges/badges.component';

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [CommonModule,BadgesComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {
	@Input() title!: string;
	@Input() placement: 'first' | 'middle' | 'last' = 'first';

	public _borderCss: string = '';

	toggleDetails(event: MouseEvent, detailsElement: HTMLDetailsElement): void {
		console.log('---> toggleDetails');
		// !! Optional: We could prevent default and manually toggle for more control
		// event.preventDefault();
		// detailsElement.open = !detailsElement.open;
	  }

	toggleObjDetails(event: MouseEvent, detailsObjElement: HTMLDetailsElement): void {
		console.log('---> toggleObjDetails');
		// !! Optional: We could prevent default and manually toggle for more control
		// event.preventDefault();
		// detailsElement.open = !detailsElement.open;
	}

	ngOnInit(): void {
		if(this.placement === 'first') {
			this._borderCss = 'rounded-t-xl';
		} else if(this.placement === 'middle') {
			this._borderCss = '';
		} else if(this.placement === 'last') {
			this._borderCss = 'rounded-b-xl';
		}
	}
}

