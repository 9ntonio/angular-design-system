import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import {
	ContentfulService,
	StateService,
} from 'public-library';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
	private readonly subscriptions = new Subscription();

	constructor(
		private readonly _contentfulService: ContentfulService,
		private readonly _stateService: StateService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.subscriptions.add(
			this.route.url.subscribe((segments) => {
				const slug = segments.map((segment) => segment.path).join('/');
				const finSlug = slug === '' ? 'home' : slug;
				console.log(
					`%c URL slug: ${finSlug} `,
					'color: white; background-color: #ff0000; padding: 2px; border-radius: 4px;'
				);
			})
		);

		this._contentfulService.getEntry();
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
