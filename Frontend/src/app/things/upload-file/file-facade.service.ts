import { Injectable } from '@angular/core';
import { FileStateService } from './file-state.service';
import { FileApiService } from './file-api.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { error } from 'protractor';
import { FileState } from './file-state';

@Injectable({
  providedIn: 'root'
})
export class FileFacadeService {

  constructor(private fileStateService: FileStateService, private fileAPI: FileApiService) { }

  createFiles(files: { [key: string]: File }) {

    Object.keys(files).forEach(keyFile => {
      // FileState.id= Date.Time()+ ' ' +(Math.randpm()*1000)
      this.fileAPI.createFile(files[keyFile]).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = (100 * event.loaded) / event.total;
          const fileState = new FileState(files[keyFile].name, keyFile, progress, true, false);
          // this.fileStateService
          this.fileStateService.updateFiles(fileState);
        } else if (event instanceof HttpResponse) {
          // end of upload
          //add the link from event ;
          const fileState = new FileState(files[keyFile].name, keyFile, 100, false, true);
          this.fileStateService.updateFiles(fileState);
        }
      },
        err => {
          // handel error fileStateService
          console.log(err);
        });
    });
  }
  deleteFile(file: FileState) {
    if (file.Successful) {
      // delete from server
    }
    this.deleteFile(file);
  }
  getFiles$() {
    this.fileStateService.getFiles$();
  }
}
