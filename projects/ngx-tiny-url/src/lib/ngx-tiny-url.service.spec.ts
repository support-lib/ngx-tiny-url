import { TestBed } from '@angular/core/testing';

import { NgxTinyUrlService } from './ngx-tiny-url.service';

describe('NgxTinyUrlService', () => {
  let service: NgxTinyUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTinyUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
