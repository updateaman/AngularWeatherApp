import { Injectable } from '@angular/core';
import { City } from './City';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  private citiesUrl = 'assets/city.list.json';

  constructor(private http: HttpClient) { }

  // getCities(): Observable<City[]> {
  //     return this.http.get<City[]>(this.citiesUrl);
  // }

}
