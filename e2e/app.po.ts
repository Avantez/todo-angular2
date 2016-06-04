export class TodoAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-angular2-app h1')).getText();
  }
}
