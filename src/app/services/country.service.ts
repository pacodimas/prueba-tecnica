import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://api.first.org/data/v1/countries?region=africa&limit=10';
  }

  getCountries(): Observable<any> {
    return this._http.get(this.url);
  }
}
