import { AngularbasesPage } from './app.po';

describe('angularbases App', function() {
  let page: AngularbasesPage;

  beforeEach(() => {
    page = new AngularbasesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
