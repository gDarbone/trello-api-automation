describe('Cenários Felizes', () => {
  it('Deve criar um board', () => {
    cy.createBoard('Board Automático');
  });

  it('Deve criar uma lista e adicionar um card nela', () => {
    cy.createList('Lista de Teste');
    cy.createCard('Card Automático');
  });

  it('Deve excluir um card', () => {
    cy.deleteCard();
  });

  it('Deve excluir um board', () => {
    cy.deleteBoard();
  });
});

//   **CENÁRIO ADICIONAIS */
describe('Cenário de erro', () => {
  it('Deve excluir um board inexistente', () => {
    cy.deleteBoardById('123123', 400);
  });

  it('Deve excluir um board nulo', () => {
    cy.deleteBoardById(null, 404);
  });

  it('Deve excluir um card inexistente', () => {
    cy.deleteCardById('123', 400);
  });

  it('Deve excluir um card nulo', () => {
    cy.deleteCardById(null, 404);
  });
});

