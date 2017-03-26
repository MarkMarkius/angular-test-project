import { BalancePage } from './app.po';

describe('ang App', () => {
  let page: BalancePage;

  beforeEach(() => {
    page = new BalancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
