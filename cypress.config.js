const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    specPattern: 'cypress/integration',
    baseUrl: 'https://serverest.dev'
  },
});