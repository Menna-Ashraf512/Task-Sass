import { TestBed } from '@angular/core/testing';

import { MealsByNameService } from './meals-by-name.service';

describe('MealsByNameService', () => {
  let service: MealsByNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsByNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
