import { TestBed } from '@angular/core/testing';

import { CookieInterceptorService } from './cookie-interceptor.service';

describe('CookieInterceptorService', () => {
  let service: CookieInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
