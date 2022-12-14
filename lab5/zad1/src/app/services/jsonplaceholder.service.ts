import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<any>(url)
  }

  getPhotos():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get<any>(url)
  }

  getPhoto(id: number): Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/photos/" + id.toString();
    return this.http.get<any>(url)
  }

  sendPost(body: string): Observable<any>{
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", body, this.httpOptions)
  }

}
