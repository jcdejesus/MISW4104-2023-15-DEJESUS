import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlantasListService } from './plantas-list.service';

describe('PlantasListService', () => {
  let service: PlantasListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantasListService],
    });
    service = TestBed.inject(PlantasListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
