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

  get characterItems() {
    return this.charactersList.children();
  }

  get cardNames() {
    return cy.get('.card-name');
  }

  get noResultMessage() {
    return cy.get('.no-results-message');
  }

  get RickSanchesCard() {
    return this.cardNames.contains('Rick Sanchez');
  }

  setSearchTerm(term: string) {
    this.searchBar.type(term);
  }

  clearSearchTerm() {
    this.searchBar.clear();
  }

  clickSubmitButton() {
    this.submitButton.click();
  }

  clickRickSanchesCard() {
    this.RickSanchesCard.click();
  }
}

export const homePage = new HomePage();
