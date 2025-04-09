import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChainModifiers } from 'contentful';
import {
	ContentfulService,
	TypeArticlePage,
	StateService,
} from 'public-library';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	public _contentfulData: TypeArticlePage<ChainModifiers> | null = null;

	constructor(
		private readonly _contentfulService: ContentfulService,
		private readonly _stateService: StateService
	) {}

	ngOnInit() {
		this._contentfulService.getEntries();

		this._contentfulService
			.getPage()
			.then((data: TypeArticlePage<ChainModifiers>) => {
				this._contentfulData = data;
				this._stateService.setContentfulData(this._contentfulData);
			});
	}
}
