import { TestBed } from '@angular/core/testing';

import { AllMealsService } from './all-meals.service';

describe('AllMealsService', () => {
  let service: AllMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
