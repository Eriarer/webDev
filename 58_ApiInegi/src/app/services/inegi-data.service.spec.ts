import { TestBed } from '@angular/core/testing';

import { InegiDataService } from './inegi-data.service';

describe('InegiDataService', () => {
  let service: InegiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InegiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
