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

}
