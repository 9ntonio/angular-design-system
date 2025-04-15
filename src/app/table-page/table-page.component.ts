import { Component } from '@angular/core';
import { TablesComponent } from 'public-library';

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [TablesComponent],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.scss'
})
export class TablePageComponent {
	public _tableHeaders = ['parameter', 'default value', 'valid values'];
	public _tableRows = [
		['closeEnable', 'false', 'true, false'],
		['closeEnable', 'true', 'true, false'],
		['closeEnable', 'false', 'true, false'],
		['closeEnable', 'true', 'true, false'],
		['closeEnable', 'false', 'true, false'],
		['closeEnable', 'true', 'true, false'],
		['closeEnable', 'false', 'true, false'],
	];
	public _headerRows = [
		['closeEnable','false', 'true, false'],
		['closeEnable','true', 'true, false'],
		['closeEnable','false', 'true, false'],
		['closeEnable','true', 'true, false'],
		['closeEnable','false', 'true, false'],
		['closeEnable','true', 'true, false'],
		['closeEnable','true', 'true, false'],
		['closeEnable','true', 'true, false']
	];
}
