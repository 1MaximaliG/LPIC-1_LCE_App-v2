import { TestBed } from '@angular/core/testing';

import { ResolverInterceptor } from './resolver.interceptor';

describe('ResolverInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResolverInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResolverInterceptor = TestBed.inject(ResolverInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
