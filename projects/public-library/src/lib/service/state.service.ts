import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StateService {
	private contentfulData = new BehaviorSubject<any>(null);
	contentfulData$ = this.contentfulData.asObservable();

	setContentfulData(data: any) {
		this.contentfulData.next(data);
	}

	getContentfulData() {
		return this.contentfulData.value;
	}
}
