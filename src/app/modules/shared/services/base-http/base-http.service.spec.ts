import {TestBed} from '@angular/core/testing';

import {BaseHttpService} from './base-http.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('BaseHttpService', () => {
  let service: BaseHttpService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the url', () => {
    const url = service.setUrl('s', 'movie');
    expect(url).toEqual('http://www.omdbapi.com/?apikey=a55e2dd8&s=movie');
  });
});
