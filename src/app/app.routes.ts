import { Routes } from '@angular/router';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { HomeComponent } from './home/home.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { BadgesPageComponent } from './badges-page/badges-page.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colors', component: ColorPaletteComponent },
  { path: 'icons', component: IconsPageComponent },
  { path: 'badges', component: BadgesPageComponent },
];
