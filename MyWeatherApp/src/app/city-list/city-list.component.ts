import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { CityServiceService } from '../city-service.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityServiceService) { }

  ngOnInit() {
    // this.cityService.getCities().subscribe((data: City[]) => this.cities = data.slice(0, 10));
  }

}
