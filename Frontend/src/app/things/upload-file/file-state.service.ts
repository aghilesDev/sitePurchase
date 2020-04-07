import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStateService {

  files$: BehaviorSubject<any[]>;

  constructor() {
    this.files$ = new BehaviorSubject<any[]>([]);
  }

  addFile(file: any) {

  }
  getFiles$() {
    return this.files$;
  }
}
