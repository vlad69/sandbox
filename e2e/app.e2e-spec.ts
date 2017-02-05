import { A2&CouchPage } from './app.po';

describe('a2&couch App', function() {
  let page: A2&CouchPage;

  beforeEach(() => {
    page = new A2&CouchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
