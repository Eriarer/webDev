import { TestBed } from '@angular/core/testing';

import { VtubersService } from './vtubers.service';

describe('VtubersService', () => {
  let service: VtubersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtubersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
