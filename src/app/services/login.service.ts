import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  public url: string;

  public userLogin: any;

  constructor(public _http: HttpClient) {
    this.url = 'https://atid-auth-test.herokuapp.com';
  }

  login(user: any): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + '/api/users/auth', params, {
      headers: headers,
    });
  }

  guardarUser(user: any) {
    this.userLogin = user;
  }

  getUser() {
    return this.userLogin;
  }
}
