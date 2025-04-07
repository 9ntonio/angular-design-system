import { Component } from '@angular/core';
import { IconsComponent } from 'public-library';

@Component({
  selector: 'app-icons-page',
  standalone: true,
  imports: [IconsComponent],
  templateUrl: './icons-page.component.html',
  styleUrl: './icons-page.component.scss',
})
export class IconsPageComponent {}
