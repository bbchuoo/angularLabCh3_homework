import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  userId = '';
  title = '';
  completed = '';
  constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    this.form = this.fb.group({
      userId: ['', [Validators.required, Validators.minLength(6)]],
      completed: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  btnClick() {
    const obj = { 'userId': this.userId, 'completed': this.completed, 'title': this.title };
    this.appService.getUserDate(obj);
    this.router.navigate(['/completed']);
  }

  reset() {
    this.form.reset(); // 使用formGroup提供的reset方法:重置FormGroup
  }


}
