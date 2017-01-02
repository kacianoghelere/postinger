import { PostingerPage } from './app.po';

describe('postinger App', function() {
  let page: PostingerPage;

  beforeEach(() => {
    page = new PostingerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
