import { BasePage } from './BasePage';

class AboutPage extends BasePage {
  open() {
    return super.open('http://localhost:3001/about');
  }

  get message() {
    return cy.get('=No data provided');
  }
}
