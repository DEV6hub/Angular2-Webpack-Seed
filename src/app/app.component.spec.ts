import {
  addProviders,
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => addProviders([AppComponent]));
  beforeEach(inject([AppComponent], (component: AppComponent) => app = component));

  it('should exist',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
