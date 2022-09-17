import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BreakingbadService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://www.breakingbadapi.com';
  }

  getQuoteId(id: any): Observable<any> {
    return this._http.get(this.url + '/api/quotes/' + id);
  }
}
