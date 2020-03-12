import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


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
    console.log('hello');
    this.authentificationService.login(this.email, this.password)
  }

}
