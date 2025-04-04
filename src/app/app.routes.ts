import { Routes } from '@angular/router';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colors', component: ColorPaletteComponent }
];
