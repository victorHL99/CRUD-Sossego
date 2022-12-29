/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Create User', () => {
  it('should create a new user and return sucess', () => {
    const user = {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      date: '2020-01-01',
      cep: faker.random.numeric(8),
      street: faker.address.streetName(),
      number: faker.address.buildingNumber(),
      district: faker.address.county(),
      city: faker.address.city(),
      reference: faker.address.secondaryAddress(),
      about: faker.lorem.paragraph(),
    };

    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=name]').type(user.name);
    cy.get('[data-cy=password]').type(user.password);
    cy.get('[data-cy=confirmPassword]').type(user.password);
    cy.get('[data-cy=email]').type(user.email);
    cy.get('[data-cy=date]').type(user.date);

    cy.get('[data-cy=nextStep]').click();

    cy.get('[data-cy=cep]').type(user.cep);
    cy.get('[data-cy=street]').type(user.street);
    cy.get('[data-cy=number]').type(user.number);
    cy.get('[data-cy=district]').type(user.district);
    cy.get('[data-cy=city]').type(user.city);
    cy.get('[data-cy=reference]').type(user.reference);

    cy.get('[data-cy=nextStep]').click();

    cy.get('[data-cy=about]').type(user.about);

    cy.get('[data-cy=nextStep]').click();

    cy.contains('Ok').click();

    cy.contains('Usuário Criado!').should('be.visible');
  });
});
