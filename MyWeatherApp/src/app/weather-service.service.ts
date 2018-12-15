import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherModel } from './WeatherModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getCityWeather(cityName: string): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=447e84a3fa3f93c0a527bf65dccd68a1&units=metric`);
  }
}
