import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common"
import { BadgesComponent } from '../badges/badges.component';

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [CommonModule,BadgesComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
	@Input() title!: string;

	toggleDetails(event: MouseEvent, detailsElement: HTMLDetailsElement): void {
		console.log('toggleDetails', event, detailsElement);
		// Optional: We could prevent default and manually toggle for more control
		// event.preventDefault();
		// detailsElement.open = !detailsElement.open;

		// For more advanced animation, we would add code here
		// to control height transition, etc.
	  }
}

