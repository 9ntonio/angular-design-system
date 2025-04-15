import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common"

@Component({
  selector: 'lib-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
	//* tableRows: each inner array contains the values for a row
	@Input() tableRows!: any[][];
	@Input() tableHeaders!: any[];
	@Input() type: 'column' | 'row' | 'both' = 'column';
}
