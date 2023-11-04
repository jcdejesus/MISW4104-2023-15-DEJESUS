import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantasListService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
