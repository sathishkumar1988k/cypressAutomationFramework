const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/e2e/mochaSpecFiles/*.cy.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/features/*.feature'
  },
  retries: {
    "runMode": 2,
    "openMode": 0
  },
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 60000,
  projectId: "4tytt2",
});
