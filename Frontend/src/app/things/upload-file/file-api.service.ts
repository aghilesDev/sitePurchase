import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileApiService {
  API = '';
  constructor(private http: HttpClient) { }

  createFile(newFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', newFile, newFile.name);
    return this.http.post(this.API, formData, { reportProgress: true })
  }
}
