import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { createClient } from 'contentful';
import {
	TypeArticlePageSkeleton,
	TypeArticlePageWithoutLinkResolutionResponse,
} from '../contentfulmodels/contentful-types.ts';
import { Observable, from, map, catchError, throwError } from 'rxjs';

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

	getEntry(): Observable<TypeArticlePageWithoutLinkResolutionResponse[]> {
		return from(
			this._contentfulClient.getEntry<TypeArticlePageSkeleton>(
				CONFIG.testEntryId
			)
		).pipe(
			map((response) => {
				return [
					response,
				] as TypeArticlePageWithoutLinkResolutionResponse[];
			}),
			catchError((error) => {
				console.error('Error:', error);
				return throwError(() => new Error(`Error: ${error}`));
			})
		);
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
				console.error('Error-Articles:', error);
				return throwError(() => new Error(`Error: ${error}`));
			})
		);
	}
}
