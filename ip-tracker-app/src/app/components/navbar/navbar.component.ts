import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IpGeoLocationService } from 'src/app/services/ip-geo-location.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public ipAddressControl= new FormControl('')

  constructor(private ipGeoLocationService: IpGeoLocationService){ }

  public getValue():void{
    let value: string | null = this.ipAddressControl.value;
    console.log(this.ipGeoLocationService.getGeoLocation().subscribe(value=>{
      console.log(value);
    }))
  }
}
