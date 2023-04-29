import { EventPositiveFlowType } from '../business objects/testData';
import { BasePage } from './BasePage';

class FormPage extends BasePage {
  open() {
    return super.open('http://localhost:3001/forms');
  }

  get eventForm() {
    return cy.get('.event-form');
  }

  get sectionTitle() {
    return cy.get('.section-title');
  }

  get formTitle() {
    return this.sectionTitle.contains(`'Rick and Morty' Speaking Club`);
  }

  get eventsTitle() {
    return this.sectionTitle.contains('Upcoming Events');
  }

  get eventNameField() {
    return cy.get('[name=name]');
  }

  get eventNameError() {
    return cy.get('div').contains('Event Name cannot be empty');
  }

  get eventDateField() {
    return cy.get('[type=date]');
  }

  get eventDateError() {
    return cy.get('div').contains('Event Date cannot be empty');
  }

  get eventThemeCheckboxes() {
    return cy.get('[type=checkbox]');
  }

  get eventThemeError() {
    return cy.get('div').contains('At least one theme should be selected');
  }

  get eventLanguageSelect() {
    return cy.get('select');
  }

  get eventLanguageError() {
    return cy.get('div').contains('Language should be selected');
  }

  get eventTypeRadios() {
    return cy.get('[type=radio]');
  }

  get eventTypeError() {
    return cy.get('div').contains('Type should be selected');
  }

  get eventPlaceField() {
    return cy.get('[name=place]');
  }

  get eventPlaceError() {
    return cy.get('div').contains('Event Place cannot be empty');
  }

  get eventPosterFile() {
    return cy.get('[type=file]');
  }

  get eventPosterError() {
    return cy.get('div').contains('Event Poster should be uploaded');
  }

  get submitButton() {
    return cy.get('input[type=submit]');
  }

  get eventList() {
    return cy.get('.events');
  }

  get eventItem() {
    return cy.get('.events-item');
  }

  get eventImage() {
    return cy.get('.event__image');
  }

  get eventName() {
    return cy.get('.event__name');
  }

  get eventPlace() {
    return cy.get('.event__address');
  }

  get eventType() {
    return cy.get('.event__type');
  }

  get eventDate() {
    return cy.get('.event__date');
  }

  get eventLang() {
    return cy.get('.event__lang-item');
  }

  get eventTheme() {
    return cy.get('.event__theme-item');
  }

  setEventName(value: string) {
    this.eventNameField.type(value);
  }

  setEventDate(value: string) {
    this.eventDateField.type(value);
  }

  setEventTheme(...values: string[]) {
    this.eventThemeCheckboxes.check(values, { force: true });
  }

  setEventLanguage(value: string) {
    this.eventLanguageSelect.select(value);
  }

  setEventType(value: string) {
    this.eventTypeRadios.check(value, { force: true });
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

  fillOutFormWithValidData(data: EventPositiveFlowType) {
    this.setEventName(data.name);
    this.setEventDate(data.date);
    this.setEventTheme(...data.theme);
    this.setEventLanguage(data.language);
    this.setEventType(data.type);
    this.setEventPlace(data.place);
    this.setEventPoster(data.poster);
  }
}

export const formPage = new FormPage();
