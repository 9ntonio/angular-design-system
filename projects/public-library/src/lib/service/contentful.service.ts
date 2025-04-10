import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { createClient } from 'contentful';
import {
	TypeArticlePageSkeleton,
	TypeArticlePageWithoutLinkResolutionResponse,
} from '../contentfulmodels/contentful-types.ts';
import { Observable, from, map, catchError, of, throwError } from 'rxjs';

const CONFIG = {
	space: environment.SPACE_ID ?? '',
	accessToken: environment.CONTENT_DELIVERY_API_KEY ?? '',
	testEntryId: environment.TEST_ENTRY_ID ?? '',
};

@Injectable({
	providedIn: 'root',
})
export class ContentfulService {
	private readonly _contentfulClient = createClient({
		space: CONFIG.space,
		accessToken: CONFIG.accessToken,
		environment: 'master',
	});

	constructor() {}

	getEntry(): void {
		this._contentfulClient
			.getEntry<TypeArticlePageSkeleton>(CONFIG.testEntryId)
			.then((response) => console.log(response))
			.catch(console.error);
	}

	getArticleEntries(
		slug: string
	): Observable<TypeArticlePageWithoutLinkResolutionResponse[]> {
		return from(
			this._contentfulClient.getEntries<TypeArticlePageSkeleton>({
				content_type: 'articlePage',
				'fields.slug': slug,
				limit: 2,
			})
		).pipe(
			map(
				(response) =>
					response.items as TypeArticlePageWithoutLinkResolutionResponse[]
			),
			catchError((error) => {
				console.error('Error fetching articles:', error);
				return throwError(() =>  new Error(`Error: ${ error }`);
			})
		);
	}
}
