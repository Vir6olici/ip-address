import { TestBed } from '@angular/core/testing';

import { IpGeoLocationService } from './ip-geo-location.service';

describe('IpGeoLocationService', () => {
  let service: IpGeoLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpGeoLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
