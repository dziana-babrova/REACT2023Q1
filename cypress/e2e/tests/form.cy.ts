import { eventPositiveFlow } from '../business objects/testData';
import { formPage } from '../page objects/FormPage';

describe('The form', () => {
  it('contains the proper elements', () => {
    formPage.open();
    formPage.formTitle.should('exist');
    formPage.eventNameField.should('exist');
    formPage.eventNameError.should('not.exist');
    formPage.eventDateField.should('exist');
    formPage.eventDateError.should('not.exist');
    formPage.eventThemeCheckboxes.should('exist');
    formPage.eventThemeError.should('not.exist');
    formPage.eventLanguageSelect.should('exist');
    formPage.eventLanguageError.should('not.exist');
    formPage.eventTypeRadios.should('exist');
    formPage.eventTypeError.should('not.exist');
    formPage.eventPlaceField.should('exist');
    formPage.eventPlaceError.should('not.exist');
    formPage.eventPosterFile.should('exist');
    formPage.eventPosterError.should('not.exist');
    formPage.submitButton.should('exist');
    formPage.eventsTitle.should('exist');
    formPage.eventItem.should('not.exist');
  });

  it('triggers validation when no data is entered', () => {
    formPage.open();
    formPage.submitButton.click();
    formPage.eventNameField.should('exist');
    formPage.eventNameError.should('exist');
    formPage.eventDateField.should('exist');
    formPage.eventDateError.should('exist');
    formPage.eventThemeCheckboxes.should('exist');
    formPage.eventThemeError.should('exist');
    formPage.eventLanguageSelect.should('exist');
    formPage.eventLanguageError.should('exist');
    formPage.eventTypeRadios.should('exist');
    formPage.eventTypeError.should('exist');
    formPage.eventPlaceField.should('exist');
    formPage.eventPlaceError.should('exist');
    formPage.eventPosterFile.should('exist');
    formPage.eventPosterError.should('exist');
    formPage.submitButton.should('exist');
    formPage.eventItem.should('not.exist');
  });

  it('creates a card if submission is successful', () => {
    formPage.open();
    formPage.fillOutFormWithValidData(eventPositiveFlow);
    formPage.submitButton.click();
    formPage.eventItem.should('exist');
    formPage.eventImage.should('exist');
    formPage.eventName.should('have.text', `${eventPositiveFlow.name} `);
    formPage.eventPlace.should('have.text', `${eventPositiveFlow.place} `);
    formPage.eventType.should('have.text', `(${eventPositiveFlow.type})`);
    formPage.eventDate.should('have.text', new Date(eventPositiveFlow.date).toLocaleDateString());
    formPage.eventLang.should('have.text', eventPositiveFlow.language);
    formPage.eventTheme.should('have.text', eventPositiveFlow.theme.join(', '));
  });
});
