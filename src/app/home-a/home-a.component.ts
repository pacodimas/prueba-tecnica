import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.scss'],
})
export class HomeAComponent implements OnInit {
  public user: any;

  constructor(private loginService: LoginService, private _router: Router) {
    this.user = this.loginService.getUser();
    if (this.loginService.getUser() == null || this.user['rol'] != 'ROL-A') {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
}
