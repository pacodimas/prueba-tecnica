import { Component } from '@angular/core';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService],
})
export class AppComponent {
  public isMenuCollapsed: boolean;
  public closeResult: any;

  public user: any;
  public loginUser: any;

  public faCoffee: any;
  public faHeart: any;

  constructor(
    private modalService: NgbModal,
    private loginService: LoginService
  ) {
    this.isMenuCollapsed = true;
    this.closeResult = '';
    this.user = {
      rol: '',
      password: '',
    };
    this.faCoffee = faCoffee;
    this.faHeart = faHeart;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed`;
        }
      );
  }

  onSubmit(form: any) {
    this.loginService.login(this.user).subscribe(
      (response) => {
        this.loginUser = response;
        this.guardar(this.loginUser);
        form.reset();
      },
      (error) => {
        this.loginUser = 'incorrecto';
        this.guardar(this.loginUser);
      }
    );
  }

  cerrarSesion() {
    this.loginUser = null;
    this.guardar(this.loginUser);
  }

  guardar(user: any) {
    this.loginService.guardarUser(user);
  }
}
