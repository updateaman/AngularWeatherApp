export class WeatherModel {
coord: Coord;
weather: Weather[];
base: string;
main: MainWeather;
}

class Coord {
 lon: number;
 lat: number;
}

class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

class MainWeather {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}
