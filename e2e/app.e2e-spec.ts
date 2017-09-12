import { EntensoShopPage } from './app.po';

describe('entenso-shop App', () => {
  let page: EntensoShopPage;

  beforeEach(() => {
    page = new EntensoShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
