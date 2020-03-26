import { TestBed } from '@angular/core/testing';

import { MarsService } from './mars.service';

describe('MarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarsService = TestBed.get(MarsService);
    expect(service).toBeTruthy();
  });
});
