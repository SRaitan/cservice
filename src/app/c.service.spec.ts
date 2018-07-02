import { TestBed, inject } from '@angular/core/testing';

import { CService } from './c.service';

describe('CService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CService]
    });
  });

  it('should be created', inject([CService], (service: CService) => {
    expect(service).toBeTruthy();
  }));
});
