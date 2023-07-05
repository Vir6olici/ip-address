import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoLocation } from '../components/entities/geoLocation';

@Injectable({
  providedIn: 'root'
})
export class IpGeoLocationService {
  
  private url: string = 'http://ip-api.com/json/';

  constructor(private http:HttpClient) { }

  public getGeoLocation(ipValue: string):Observable<GeoLocation>{
    return this.http.get<GeoLocation>(this.url.concat(ipValue));
  }
}
