import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileState } from './file-state';

@Injectable({
  providedIn: 'root'
})
export class FileStateService {

  files$: BehaviorSubject<Map<string, FileState>>;

  constructor() {
    this.files$ = new BehaviorSubject<Map<string, FileState>>(new Map<string, FileState>());
  }

  updateFiles(file: FileState) {
    const files = this.files$.value;
    files.set(file.id, file);
    this.files$.next(new Map(files));
  }

  deleteFile(file: FileState) {
    const files = this.files$.value;
    files.delete(file.id);
    this.files$.next(new Map(files));
  }

  getFiles$() {
    return this.files$;
  }
}
