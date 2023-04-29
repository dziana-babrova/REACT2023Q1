import { searchValues } from '../business objects/testData';
import { homePage } from '../page objects/Homepage';

describe('The user can search', () => {
  it('for existing character', () => {
    homePage.open();
    homePage.charactersList.should('exist');
    homePage.characterItems.should('have.length.at.most', 20);
    homePage.searchBar.should('exist');
    homePage.submitButton.should('exist');
    searchValues.positive.forEach((element) => {
      homePage.setSearchTerm(element);
      homePage.clickSubmitButton();
      homePage.searchBar.should('contain.value', element);
      homePage.characterItems.should('have.length.at.most', 20);
      homePage.characterItems.first().should('contain.text', element);
      homePage.characterItems.last().should('contain.text', element);
      homePage.clickNavLinkAbout();
      homePage.clickNavLinkHome();
      homePage.searchBar.should('contain.value', element);
      homePage.characterItems.should('have.length.at.most', 20);
      homePage.characterItems.first().should('contain.text', element);
      homePage.characterItems.last().should('contain.text', element);
      homePage.clearSearchTerm();
    });
  });

  it('for non-existing character', () => {
    homePage.open();
    homePage.charactersList.should('exist');
    homePage.characterItems.should('have.length.at.most', 20);
    homePage.searchBar.should('exist');
    homePage.submitButton.should('exist');
    searchValues.negative.forEach((element) => {
      homePage.setSearchTerm(element);
      homePage.clickSubmitButton();
      homePage.noResultMessage.should('have.text', 'No characters found');
      homePage.searchBar.should('contain.value', element);
      homePage.clickNavLinkAbout();
      homePage.clickNavLinkHome();
      homePage.noResultMessage.should('have.text', 'No characters found');
      homePage.searchBar.should('contain.value', element);
      homePage.clearSearchTerm();
    });
  });
});
