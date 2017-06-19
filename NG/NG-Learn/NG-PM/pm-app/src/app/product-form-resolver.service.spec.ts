import { TestBed, inject } from '@angular/core/testing';

import { ProductFormResolverService } from './product-form-resolver.service';

describe('ProductFormResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFormResolverService]
    });
  });

  it('should be created', inject([ProductFormResolverService], (service: ProductFormResolverService) => {
    expect(service).toBeTruthy();
  }));
});
