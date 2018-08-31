import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
  }

  fillInForm(email, password) {

    element(by.css('.text-input')).clear().then(() => { 
      element(by.css('.text-input')).sendKeys(email);
    });

    element(by.css('.text-input')).clear().then(() => {
      element(by.css('.text-input')).sendKeys(password);
    });

    element(by.cssContainingText('.button', 'Login')).click();
      browser.sleep(500);
    };

    results_card_content() {
      return element(by.css('ion-card-header')).getText();
    };
}