import {
  beforeEachProviders,
  it, // Deprecated, however removing this import throws a type error in RC4
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('AppComponent', () => {
  it('should exist',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
});
