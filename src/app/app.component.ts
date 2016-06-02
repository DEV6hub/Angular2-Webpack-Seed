import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
