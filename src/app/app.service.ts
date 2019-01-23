import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ApiUrl = 'https://jsonplaceholder.typicode.com';
  data;
  userData;
  constructor(private HttpClient: HttpClient) { }

  getUserDate(x) {
    console.log("AppService x===", x)
    this.data = x;
    this.postPosts();
  }

  postPosts() {
    return this.HttpClient.post(this.ApiUrl + '/posts',this.data)
  }

}
