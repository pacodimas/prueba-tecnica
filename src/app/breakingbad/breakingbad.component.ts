import { LoginService } from './../services/login.service';
import { BreakingbadService } from './../services/breakingbad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breakingbad',
  templateUrl: './breakingbad.component.html',
  styleUrls: ['./breakingbad.component.scss'],
  providers: [BreakingbadService],
})
export class BreakingbadComponent implements OnInit {
  public quote: any;
  public user: any;

  public faArrowRight: any;
  public faArrowLeft: any;

  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _breakingBadService: BreakingbadService
  ) {
    this.user = this.loginService.getUser();
    if (this.loginService.getUser() == null) {
      this._router.navigate(['/']);
    }
    this.faArrowRight = faArrowRight;
    this.faArrowLeft = faArrowLeft;
    this.quote = '';

    this.getQuoteById(1);
  }

  ngOnInit(): void {}

  getQuoteById(id: any) {
    id = id == 0 ? 1 : id;
    id = id == 31 ? 63 : id;
    id = id == 62 ? 30 : id;

    this._breakingBadService.getQuoteId(id).subscribe(
      (result) => {
        this.quote = result[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
