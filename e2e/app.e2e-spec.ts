import { DancerstownFrontPage } from './app.po';

describe('dancerstown-front App', () => {
  let page: DancerstownFrontPage;

  beforeEach(() => {
    page = new DancerstownFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
