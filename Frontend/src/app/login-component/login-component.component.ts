import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  password = '';
  email = '';

  constructor(private authentificationService: AuthenticationService) { }


  ngOnInit(): void {
  }

  login() {
    this.authentificationService.login(this.email, this.password);
  }

}
