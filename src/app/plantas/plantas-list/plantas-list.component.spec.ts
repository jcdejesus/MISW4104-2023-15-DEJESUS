import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlantasListComponent } from './plantas-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { plantasFakeData } from '../shared/data';

describe('PlantasListaComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantasListComponent],
    });
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    component._plantas = plantasFakeData;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should render', () => {
    it('a table with a header', () => {
      const cantidadDeCeldas = 4;
      const celdas = debug.queryAll(
        By.css('.table.table-hover.custom-table thead tr th')
      );
      expect(celdas.length).toEqual(cantidadDeCeldas);
    });

    it('a table with all plants', () => {
      const plantas = debug.queryAll(
        By.css('.table.table-hover.custom-table .table-group-divider tr')
      );
      expect(plantas.length).toEqual(component._plantas.length);
    });
  });
});
