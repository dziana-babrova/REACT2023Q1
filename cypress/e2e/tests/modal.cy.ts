import { characterModal } from '../page objects/CharacterModal';
import { homePage } from '../page objects/Homepage';

describe('The modal', () => {
  it('contain the proper elements', () => {
    homePage.open();
    homePage.charactersList.should('exist');
    homePage.RickSanchesCard.should('exist');
    homePage.clickRickSanchesCard();
    characterModal.overlay.should('be.visible');
    characterModal.popup.should('be.visible');
    characterModal.characterImage.should('exist');
    characterModal.characterName.contains('Rick Sanchez').should('exist');
    characterModal.characterStatus.contains('Alive').should('exist');
    characterModal.characterGender.contains('Male').should('exist');
    characterModal.characterSpecies.contains('Human').should('exist');
    characterModal.characterType.should('exist');
    characterModal.characterLocation.contains('Citadel of Ricks').should('exist');
    characterModal.closeButton.should('exist');
  });

  it('could be opened and closed', () => {
    homePage.open();
    homePage.charactersList.should('exist');
    homePage.RickSanchesCard.should('exist');
    homePage.clickRickSanchesCard();
    characterModal.overlay.should('be.visible');
    characterModal.popup.should('be.visible');
    characterModal.closeButton.should('exist');
    characterModal.clickCloseButton();
    characterModal.overlay.should('not.exist');
    characterModal.popup.should('not.exist');
    homePage.clickRickSanchesCard();
    characterModal.overlay.should('be.visible');
    characterModal.popup.should('be.visible');
    characterModal.overlay.click({ force: true });
    characterModal.overlay.should('not.exist');
    characterModal.popup.should('not.exist');
  });
});
