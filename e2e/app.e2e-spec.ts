import { CommandHostPage } from './app.po';

describe('command-host App', function() {
  let page: CommandHostPage;

  beforeEach(() => {
    page = new CommandHostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
