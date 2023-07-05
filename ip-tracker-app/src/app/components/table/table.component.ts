import { Component, Input } from '@angular/core';
import { LocationStats } from '../entities/location';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  
  @Input() public locationStats: LocationStats;
}
