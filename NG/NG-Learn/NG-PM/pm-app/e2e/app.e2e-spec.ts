import { PmAppPage } from './app.po';

describe('pm-app App', () => {
  let page: PmAppPage;

  beforeEach(() => {
    page = new PmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
