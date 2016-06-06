import {
  beforeEachProviders,
  describe,
  expect,
  it,
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
