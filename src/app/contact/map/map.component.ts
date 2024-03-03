import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  marker = { lat: 30.2029406, lng: 71.5329909 };

  mapOptions: google.maps.MapOptions = {
    center: { lat: 30.2029406, lng: 71.5329909 },
    mapTypeId: 'hybrid',
  };
}
