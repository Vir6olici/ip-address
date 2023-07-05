import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpGeoLocationService {
  
  private url: string = 'http://ip-api.com/json/24.48.0.1';

  constructor(private http:HttpClient) { }

  public getGeoLocation(){
    return this.http.get(this.url);
  }
}
