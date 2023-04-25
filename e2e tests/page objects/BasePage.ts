import { Page } from './Page';

export class BasePage extends Page {
  open(baseUrl: string) {
    return super.open(baseUrl);
  }

  get pageName() {
    return cy.get('.header__title');
  }

  get navLinkHome() {
    return cy.get('a=Home');
  }

  get navLinkAbout() {
    return cy.get('a=About');
  }

  get navLinkForms() {
    return cy.get('a=Forms');
  }

  clickNavLinkHome() {
    this.navLinkHome.click();
  }

  clickNavLinkAbout() {
    this.navLinkAbout.click();
  }

  clickNavLinkForms() {
    this.navLinkForms.click();
  }
}
