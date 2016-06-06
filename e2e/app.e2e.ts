
describe('Angular 2 Webpack Seed', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a browser title', () => {
    expect(browser.getTitle()).toEqual('Angular 2 Webpack Seed');
  });

  it('should have a page header', () => {
    expect(element(by.css('h1')).isPresent()).toBe(true);
    expect(element(by.css('h1')).getText()).toBe('My First Angular 2 App');
  });
});
