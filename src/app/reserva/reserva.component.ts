import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from './../services/country.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  providers: [CountryService],
})
export class ReservaComponent implements OnInit {
  public fechaActual: any;
  public fecha: any;
  public form: any;
  public countries: any;
  public countries2: String[];
  public user: any;

  constructor(
    private _countryService: CountryService,
    private modalService: NgbModal,
    private loginService: LoginService,
    private _router: Router
  ) {
    this.user = this.loginService.getUser();
    if (this.loginService.getUser() == null || this.user['rol'] != 'ROL-A') {
      this._router.navigate(['/']);
    }
    this.fechaActual = new Date();
    this.fecha = new Date();
    this.countries2 = new Array();

    this.fecha = new Date(
      this.fecha.getFullYear(),
      this.fecha.getMonth() - 11,
      this.fecha.getDate()
    );

    this.fechaActual = new Date(
      this.fechaActual.getFullYear(),
      this.fechaActual.getMonth(),
      this.fechaActual.getDate() + 1
    );
    this.form = {
      date: '',
      nombre: '',
      correo: '',
      pais: '',
    };
    this.getCountry();
  }

  ngOnInit(): void {}

  getCountry() {
    this._countryService.getCountries().subscribe(
      (result) => {
        this.countries = result.data;
        for (let property in this.countries) {
          this.countries2.push(this.countries[`${property}`]['country']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log('close');
        },
        (reason) => {
          console.log('close');
        }
      );
  }
}
