Cypress.Commands.add('createBoard', (name) => {
    cy.request({
      method: 'POST',
      url: '/boards/',
      qs: {
        name,
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      Cypress.env('boardId', response.body.id);
    });
  });
  
  Cypress.Commands.add('createList', (name) => {
    cy.request({
      method: 'POST',
      url: '/lists',
      qs: {
        name,
        idBoard: Cypress.env('boardId'),
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      Cypress.env('listId', response.body.id);
    });
  });
  
  Cypress.Commands.add('createCard', (name) => {
    cy.request({
      method: 'POST',
      url: '/cards',
      qs: {
        name,
        idList: Cypress.env('listId'),
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      Cypress.env('cardId', response.body.id);
    });
  });
  
  Cypress.Commands.add('deleteBoard', () => {
    cy.request({
      method: 'DELETE',
      url: `/boards/${Cypress.env('boardId')}`,
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  
  Cypress.Commands.add('deleteCard', () => {
    cy.request({
      method: 'DELETE',
      url: `/cards/${Cypress.env('cardId')}`,
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  Cypress.Commands.add('deleteBoardById', (boardId, expectedStatusCode) => {
    cy.request({
      method: 'DELETE',
      url: boardId ? `/boards/${boardId}` : `/boards`, // Se `boardId` for nulo, remove da URL
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(expectedStatusCode);
    });
  });
  
  Cypress.Commands.add('deleteCardById', (cardId, expectedStatusCode) => {
    cy.request({
      method: 'DELETE',
      url: cardId ? `/cards/${cardId}` : `/cards`, // Se `cardId` for nulo, remove da URL
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('apiToken')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(expectedStatusCode);
    });
  });
  
