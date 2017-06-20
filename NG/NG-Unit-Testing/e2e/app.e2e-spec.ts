import { NGUnitTestingPage } from './app.po';

describe('ng-unit-testing App', () => {
  let page: NGUnitTestingPage;

  beforeEach(() => {
    page = new NGUnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
