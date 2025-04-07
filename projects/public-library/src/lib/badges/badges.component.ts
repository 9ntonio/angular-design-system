import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss',
})
export class BadgesComponent {
  @Input() copy!: string;
  @Input() type!: string; // !! http, response, general
  @Input() color: string = 'blue'; // !! red, orange, green, blue
  @Input() size?: string; // !! sm, md, lg
  @Input() outline: boolean = false; // !! used for general badge
}
