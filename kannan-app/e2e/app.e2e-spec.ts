import { KannanAppPage } from './app.po';

describe('kannan-app App', () => {
  let page: KannanAppPage;

  beforeEach(() => {
    page = new KannanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
