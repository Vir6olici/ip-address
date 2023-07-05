import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IpGeoLocationService } from 'src/app/services/ip-geo-location.service';
import { GeoLocation } from '../entities/geoLocation';
import { LocationStats } from '../entities/location';
import { initialLocationStats } from '../constante/initialLocationStats';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public ipAddressControl= new FormControl('')

  public locationStats: LocationStats;

  constructor(private ipGeoLocationService: IpGeoLocationService){
    this.locationStats=initialLocationStats;
  }

  public getValue():void{
    let value: string | null = this.ipAddressControl.value;
    if(value){
      
    }
  }

}
