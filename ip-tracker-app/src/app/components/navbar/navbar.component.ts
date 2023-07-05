import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable, first } from 'rxjs';
import { GeoLocation } from 'src/app/components/entities/geoLocation';
import { LocationStats } from 'src/app/components/entities/location';
import { IpGeoLocationService } from 'src/app/services/ip-geo-location.service';
import { initialLocationStats } from 'src/app/components/constants/initialLocationStats';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public ipAddressControl= new FormControl('');
  public geoLocationStats: GeoLocation;
  public locationStats: LocationStats;
  constructor(private ipGeoLocationService: IpGeoLocationService) {
    this.locationStats = initialLocationStats;
  }
  ngOnInit(){ }
  public getGeoLocation(): void{
    if(this.ipAddressControl.value){
      console.log(this.ipAddressControl.value);
      this.ipGeoLocationService.getGeoLocation(this.ipAddressControl.value)
        .pipe(first())
        .subscribe( (geoLocationResponse:GeoLocation) => {
          this.geoLocationStats = geoLocationResponse;
          this.setLocationStats();
        })
      }
  }
  private setLocationStats(): void {
    this.locationStats.ipAddress = this.ipAddressControl.value;
    this.locationStats.location = this.geoLocationStats.country + ',' + this.geoLocationStats.city + ',' + this.geoLocationStats.regionName
    this.locationStats.timezone = this.geoLocationStats.timezone,
    this.locationStats.isp = this.geoLocationStats.isp;
  }
}