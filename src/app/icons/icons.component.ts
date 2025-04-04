import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  @Input() name!: string
  @Input() height = '40px'
  @Input() width = '40px'
  @Input() color = 'black'
}
