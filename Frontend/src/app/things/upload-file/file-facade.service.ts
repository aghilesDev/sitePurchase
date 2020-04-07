import { Injectable } from '@angular/core';
import { FileStateService } from './file-state.service';

@Injectable({
  providedIn: 'root'
})
export class FileFacadeService {

  constructor(private fileState: FileStateService) { }

  createFiles(files: { [key: string]: File }) {

  }
  getFiles$() {
    this.fileState.getFiles$();
  }
}
