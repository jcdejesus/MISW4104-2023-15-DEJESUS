import { TestBed } from '@angular/core/testing';

import { PlantasListService } from './plantas-list.service';

describe('PlantasListService', () => {
  let service: PlantasListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantasListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
