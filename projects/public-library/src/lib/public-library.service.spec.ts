import { TestBed } from '@angular/core/testing';

import { PublicLibraryService } from './public-library.service';

describe('PublicLibraryService', () => {
  let service: PublicLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
