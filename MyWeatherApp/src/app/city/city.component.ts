import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherModel } from '../WeatherModel';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService,
    private route: ActivatedRoute ) { }

  cityWeather: WeatherModel;
  mainWeather: string[] = [];

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('id');
    console.log(city);

    this.weatherService.getCityWeather(city).subscribe((data: WeatherModel) => {
      this.cityWeather = data;
      console.log(data);
      this.cityWeather.weather.forEach(element => {
        this.mainWeather.push(element.main);
      });
    });
  }

}
