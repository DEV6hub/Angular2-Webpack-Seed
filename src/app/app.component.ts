import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev6-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'My First Angular 2 App';
  }

  ngOnInit(): void {
    // Initialize component with service data
  }
}
