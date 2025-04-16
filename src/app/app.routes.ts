import { Routes } from '@angular/router';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { HomeComponent } from './home/home.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { BadgesPageComponent } from './badges-page/badges-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { CalloutPageComponent } from './callout-page/callout-page.component';
import { AccordionPageComponent } from './accordion-page/accordion-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { ListPageComponent } from './list-page/list-page.component';
export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'colors', component: ColorPaletteComponent },
	{ path: 'icons', component: IconsPageComponent },
	{ path: 'badges', component: BadgesPageComponent },
	{ path: 'buttons', component: ButtonsPageComponent },
	{ path: 'callout', component: CalloutPageComponent },
	{ path: 'accordion', component: AccordionPageComponent },
	{ path: 'table', component: TablePageComponent },
	{ path: 'list', component: ListPageComponent },
	//* Catch-all route for generic pages - This single route handles all dynamic routes
	{
		path: '**',
		loadComponent: () =>
			import('./generic-page/generic-page.component').then(
				(m) => m.GenericPageComponent
			),
	},
];
