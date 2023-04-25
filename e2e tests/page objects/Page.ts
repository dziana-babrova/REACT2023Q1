/// <reference types="cypress" />

export class Page {
  open(baseUrl: string) {
    cy.visit(baseUrl);
  }

  reload() {
    cy.reload();
  }
}
