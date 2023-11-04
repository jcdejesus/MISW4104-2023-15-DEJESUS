import { Component, OnInit } from '@angular/core';
import { Planta } from '../shared/models';
import { PlantasListService } from './plantas-list.service';

@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css'],
})
export class PlantasListComponent implements OnInit {
  private plantas: Array<Planta> = [];

  get _plantas() {
    return this.plantas;
  }

  ngOnInit(): void {
    this.getPlantasService();
  }

  constructor(private plantasListService: PlantasListService) {}

  private getPlantasService() {
    this.plantasListService.getPlantas().subscribe((plantas: Planta[]) => {
      this.plantas = plantas;
    });
  }
}
