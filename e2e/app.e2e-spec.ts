import { BalansPage } from './app.po';

describe('balans App', () => {
  let page: BalansPage;

  beforeEach(() => {
    page = new BalansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
