import { Component } from '@angular/core';
import { AccordionComponent } from 'public-library';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-accordion-page',
	standalone: true,
	imports: [AccordionComponent, CommonModule],
	templateUrl: './accordion-page.component.html',
	styleUrl: './accordion-page.component.scss'
})
export class AccordionPageComponent {

}
