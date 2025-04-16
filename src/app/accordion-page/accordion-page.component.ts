import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from 'public-library';

@Component({
	selector: 'app-accordion-page',
	standalone: true,
	imports: [AccordionComponent, CommonModule],
	templateUrl: './accordion-page.component.html',
	styleUrl: './accordion-page.component.scss'
})
export class AccordionPageComponent {

}
