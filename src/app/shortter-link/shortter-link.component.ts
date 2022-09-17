import { ShortterlinkService } from './../services/shortterlink.service';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Links } from '../models/links';

@Component({
  selector: 'app-shortter-link',
  templateUrl: './shortter-link.component.html',
  styleUrls: ['./shortter-link.component.scss'],
})
export class ShortterLinkComponent implements OnInit {
  public user: any;
  public link: any;
  public shorter: any;
  public original_link: String[];
  public full_short_link: String[];

  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _shorterLink: ShortterlinkService
  ) {
    this.user = this.loginService.getUser();
    if (this.loginService.getUser() == null || this.user['rol'] != 'ROL-B') {
      this._router.navigate(['/']);
    }

    this.link = {
      url: '',
    };

    this.original_link = new Array();
    this.full_short_link = new Array();
  }

  ngOnInit(): void {}

  onsubmit(form: any) {
    this._shorterLink.shortLink(this.link['url']).subscribe(
      (result) => {
        this.shorter = result.result;

        this.original_link.unshift(this.shorter['original_link']);
        this.full_short_link.unshift(this.shorter['full_short_link']);

        form.reset();
      },
      (error) => {
        alert('Por favor ingrese un enlace válido');
        form.reset();
      }
    );
  }
}
