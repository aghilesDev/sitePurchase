import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thing } from './thing';

@Injectable({
  providedIn: 'root'
})
export class ThingAPI {

  readonly API = 'http://localhost:3000/api/stuff/';

  constructor(private http: HttpClient) { }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.API);
  }

  createThing(newThing): Observable<Thing> {
    return this.http.post<Thing>(this.API, newThing);
  }

}
