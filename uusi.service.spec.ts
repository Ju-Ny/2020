import { TestBed } from '@angular/core/testing';

import { UusiService } from './uusi.service';

describe('UusiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UusiService = TestBed.get(UusiService);
    expect(service).toBeTruthy();
  });
});
