/* global beforeEach, it, expect, describe, cy */
/**
 * This file run under cypress environment
 */
const { TIMEOUT_CLIENT } = require('./config.cjs');
const { getEmoji, getEmojis, voteEmoji } = require('./utils/client.cjs');

beforeEach(() => {
  cy.intercept('GET', '/api/v1/emojis?**', {
    statusCode: 200,
    body: {
      result: getEmojis(),
      total: getEmojis().length,
    },
  }).as('getEmojis');

  cy.intercept('GET', '/api/v1/emojis/**', {
    statusCode: 200,
    body: {
      result: getEmoji(),
    },
  }).as('getEmoji');

  cy.intercept('POST', '/api/v1/votes', {
    statusCode: 200,
    body: {
      result: voteEmoji(),
    },
  }).as('voteEmoji');
});

describe('Client Testing', () => {
  it('Must show main page', () => {
    cy.visit('/');
  });
  it("Must redirect to '/emojis' when the path is '/'", () => {
    cy.visit('/');
    cy.wait(TIMEOUT_CLIENT * 1000);
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/emojis');
    });
  });
  it('Must show at least 10 emojis with his character and name', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    const emojis = getEmojis();
    for (let index = 0; index < 10; index++) {
      cy.contains(emojis[0].name);
    }
  });
  it('Must contain the votes of the emojis', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    const emojis = getEmojis();
    for (let index = 0; index < 10; index++) {
      cy.contains(emojis[0].votes);
    }
  });
  it('Must contain a button to display the emoji and must be an anchor tag <a></a>', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    cy.get("a[href^='/emojis']").first().contains('show');
  });
  it('Must contain a button to vote the emoji and must be a button tag <button></button>', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    cy.get('button').first().contains('vote');
  });
  it('Must show the emoji page and show all the information about the emoji when the show button is pressed', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    cy.get("a[href^='/emojis']").first().click();
    cy.wait('@getEmoji');
    const emoji = getEmoji();
    cy.location().should((location) => {
      expect(location.pathname).to.contains(emoji._id);
    });
    cy.contains(emoji.name);
    cy.contains(emoji.votes);
  });
  it('Must have a button for go to leaderboard and must be an anchor tag <a></a>', () => {
    const emoji = getEmoji();
    cy.visit(`/emojis/${emoji._id}`);
    cy.wait('@getEmoji');
    cy.get("a[href='/emojis']");
  });
  it('Must vote the emoji page when the vote button is pressed', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    cy.get('button').first().contains('vote').click();
    cy.wait('@voteEmoji');
  });
  it('Must have a pagination', () => {
    cy.visit('/emojis');
    cy.wait('@getEmojis');
    const LIMIT = 10;
    const MAX_PAGINATION = Math.ceil(getEmojis().length / LIMIT);
    cy.contains(MAX_PAGINATION);
  });
});
