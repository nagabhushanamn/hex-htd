import { StoryAppPage } from './app.po';

describe('story-app App', () => {
  let page: StoryAppPage;

  beforeEach(() => {
    page = new StoryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
