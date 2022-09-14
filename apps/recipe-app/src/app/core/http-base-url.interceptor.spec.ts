import { TestBed } from '@angular/core/testing';

import { HttpBaseURLInterceptor } from './http-base-url.interceptor';

describe('HttpBaseURLInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpBaseURLInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpBaseURLInterceptor = TestBed.inject(HttpBaseURLInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
