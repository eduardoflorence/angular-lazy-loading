import { TestBed } from '@angular/core/testing';

import { CustomPreloaderService } from './custom-preloader.service';

describe('CustomPreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloaderService = TestBed.get(CustomPreloaderService);
    expect(service).toBeTruthy();
  });
});
