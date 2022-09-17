import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortterlinkService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://api.shrtco.de/v2';
  }

  shortLink(link: any): Observable<any> {
    return this._http.get(this.url + '/shorten?url=' + link);
  }
}
