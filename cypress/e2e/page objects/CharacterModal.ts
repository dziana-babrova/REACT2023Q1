import { HomePage } from './Homepage';

class CharacterModal extends HomePage {
  get popup() {
    return cy.get('.popup-card');
  }

  get characterImage() {
    return cy.get('.popup-card__image');
  }

  get characterName() {
    return cy.get('.popup-card__name');
  }

  get characterStatus() {
    return cy.get('.popup-card__status');
  }

  get characterSpecies() {
    return cy.get('.popup-card__species');
  }

  get characterGender() {
    return cy.get('.popup-card__gender');
  }
  get characterType() {
    return cy.get('.popup-card__type');
  }

  get characterLocation() {
    return cy.get('.popup-card__location');
  }

  get closeButton() {
    return cy.get('.popup__close-button');
  }

  get overlay() {
    return cy.get('.overlay');
  }

  clickCloseButton() {
    this.closeButton.click();
  }

  clickOverlay() {
    this.overlay.click();
  }
}

export const characterModal = new CharacterModal();
