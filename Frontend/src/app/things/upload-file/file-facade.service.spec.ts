import { TestBed } from '@angular/core/testing';

import { FileFacadeService } from './file-facade.service';

describe('FileFacadeService', () => {
  let service: FileFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
