import { TestBed } from '@angular/core/testing';

import { AreaAlertsService } from './area-alerts.service';

describe('AreaAlertsService', () => {
  let service: AreaAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
