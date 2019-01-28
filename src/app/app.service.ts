import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ApiUrl = 'https://jsonplaceholder.typicode.com';
  data;
  userData;
  constructor(private http: HttpClient) { }

  getUserDate(x) {
    this.data = x;
    this.postPosts();
  }

  postPosts() {
    return this.http.post(this.ApiUrl + '/posts', this.data);
  }

}
