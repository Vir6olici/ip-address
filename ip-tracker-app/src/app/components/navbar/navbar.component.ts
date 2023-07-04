import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public ipAddressControl= new FormControl('')

  constructor(){

  }

  public getValue():void{
    let value: string | null = this.ipAddressControl.value;
  }
}
