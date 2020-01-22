import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor( private http: HttpClient) { }

  getAbout() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}