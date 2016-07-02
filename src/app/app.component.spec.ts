import {
  addProviders,
  it, // Deprecated, however removing this import throws a type error in RC4 when combined
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEach(() => addProviders([AppComponent]));

describe('AppComponent', () => {
  it('should exist',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
