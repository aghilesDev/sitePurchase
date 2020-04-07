import { Component, OnInit, ViewChild } from '@angular/core';
import { FileFacadeService } from './file-facade.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('#file', { static: false }) file;
  private files;

  constructor(private fileFacade: FileFacadeService) {
    this.files = this.fileFacade.getFiles$();
  }

  ngOnInit(): void {
    //get files from server
  }

  addFile() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    this.fileFacade.createFiles(files);

  }
}
