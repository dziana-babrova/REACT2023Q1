import { BasePage } from './BasePage';

class HomePage extends BasePage {
  open() {
    return super.open('http://localhost:3001/forms');
  }

  get formTitle() {
    return cy.get(`'Rick and Morty' Speaking Club`);
  }

  get eventNameField() {
    return cy.get('[name=name]');
  }

  get eventNameError() {
    return cy.get('=Event Name cannot be empty');
  }

  get eventDateField() {
    return cy.get('[type=date]');
  }

  get eventDateError() {
    return cy.get('=Event Date cannot be empty');
  }

  get eventThemeCheckboxes() {
    return cy.get('[type=checkbox]');
  }

  get eventThemeError() {
    return cy.get('=At least one theme should be selected');
  }

  get eventLanguageSelect() {
    return cy.get('select');
  }

  get eventLanguageError() {
    return cy.get('=Language should be selected');
  }

  get eventTypeRadios() {
    return cy.get('[type=radio]');
  }

  get eventTypeError() {
    return cy.get('=Type should be selected');
  }

  get eventPlaceField() {
    return cy.get('[name=place]');
  }

  get eventPlaceError() {
    return cy.get('=Event Place cannot be empty');
  }

  get eventPosterFile() {
    return cy.get('[type=file]');
  }

  get eventPosterError() {
    return cy.get('=Event Poster should be uploaded');
  }

  get submitButton() {
    return cy.get('input[type=submit]');
  }

  get eventsTitle() {
    return cy.get('=Upcoming Events');
  }

  get eventList() {
    return cy.get('.events');
  }

  setEventName(value: string) {
    this.eventNameField.type(value);
  }

  setEventDate(value: string) {
    this.eventDateField.type(value);
  }

  setEventTheme(...values: string[]) {
    this.eventThemeCheckboxes.check(values);
  }

  setEventLanguage(value: string) {
    this.eventLanguageSelect.select(value);
  }

  setEventType(value: string) {
    this.eventTypeRadios.check(value);
  }

  setEventPlace(value: string) {
    this.eventPlaceField.type(value);
  }

  setEventPoster(value: string) {
    this.eventPosterFile.selectFile(value, { force: true });
  }

  clickSubmitButton() {
    this.submitButton.click();
  }
}
