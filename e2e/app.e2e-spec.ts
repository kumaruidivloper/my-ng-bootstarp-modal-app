import { MyModalAppPage } from './app.po';

describe('my-modal-app App', () => {
  let page: MyModalAppPage;

  beforeEach(() => {
    page = new MyModalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
