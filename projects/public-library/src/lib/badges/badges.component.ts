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
  @Input() type!: 'http' | 'response' | 'general';
  @Input() color: 'red' | 'orange' | 'green' | 'blue' = 'blue';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() outline = false;
}
