import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  open() {
    return super.open('http://localhost:3001/');
  }

  get searchBar() {
    return cy.get('input.search__field');
  }

  get submitButton() {
    return cy.get('input.search__button');
  }

  get charactersList() {
    return cy.get('ul.cards-list');
  }

  get RickSanchesCard() {
    return cy.get('=Rick Sanchez');
  }

  setSearchTerm(term: string) {
    this.searchBar.type(term);
  }

  clickSubmitButton() {
    this.submitButton.click();
  }

  clickRickSanchesCard() {
    this.RickSanchesCard.click();
  }
}
