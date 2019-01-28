import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }
  posts;
  ngOnInit() {
    this.postPosts();
  }

  postPosts() {
    return this.appService.postPosts()
      .subscribe((x) => {
        this.posts = x;
      });
  }

  btnClick() {
    this.router.navigate(['']);
  }

}
