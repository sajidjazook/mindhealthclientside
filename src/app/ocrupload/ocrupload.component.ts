import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ocrupload',
  templateUrl: './ocrupload.component.html',
  styleUrls: ['./ocrupload.component.css']
})
export class OcruploadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startQuiz() {
    this.router.navigateByUrl('/startquiz');
  }
}

