import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return github user ',()=>{
    service = TestBed.inject(ApiService);
    expect(service.getLanguage("jayesh352002","SmartConnect")).toBe(["TypeScript","Java","HTML","CSS"])
  });

});
