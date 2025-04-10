import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {
	ContentfulService,
	TypeArticlePageWithoutLinkResolutionResponse,
} from 'public-library';

@Component({
	selector: 'app-generic-page',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './generic-page.component.html',
	styleUrl: './generic-page.component.scss',
})
export class GenericPageComponent implements OnInit {
	private readonly subscriptions = new Subscription();
	public articleData$!: Observable<
		TypeArticlePageWithoutLinkResolutionResponse[]
	>;

	constructor(
		private readonly contentfulService: ContentfulService,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) {}

	ngOnInit() {
		this.subscriptions.add(
			this.route.url.subscribe((segments) => {
				const slug = segments
					.map((segment) => segment.path.replace(/\s+/g, '-'))
					.join('/');
				if (slug) {
					this.initArticle(slug);
				} else {
					console.log(
						'%c No slug found ',
						'color: white; background-color: #ff0000; padding: 2px; border-radius: 4px;'
					);
					// this.router.navigate(['/']);
				}
			})
		);
	}

	private initArticle(slug: string) {
		this.articleData$ = this.contentfulService.getArticleEntries(slug);
		this.articleData$.subscribe((data) => {
			console.log(
				`%c slug: ${slug} - length: ${data.length} `,
				'color: white; background-color: #ff0000; padding: 2px; border-radius: 4px;'
			);
		});
	}
}
