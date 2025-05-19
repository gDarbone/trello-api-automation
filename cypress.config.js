const { defineConfig } = require('cypress');

module.exports = {
  e2e: {
    supportFile: 'cypress/support/index.js',
    baseUrl: 'https://api.trello.com/1',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
};
