import { AgGridDemoPage } from './app.po';

describe('ag-grid-demo App', () => {
  let page: AgGridDemoPage;

  beforeEach(() => {
    page = new AgGridDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
