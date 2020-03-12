import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient ) { }

  async login(email: string, password: string) {
   try {
    const reponse: any = await this.http.post('http://localhost:3000/api/auth/login', { email, password}).toPromise();
    console.log(reponse);
  } catch  (error) {
    console.log(error.status);
  }
}
}
