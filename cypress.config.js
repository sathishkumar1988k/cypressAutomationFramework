const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const report = require("multiple-cucumber-html-reporter");
let browserInfo = {};

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  on('before:browser:launch', (browser = {},) => {
    browserInfo.name = browser.name;
    browserInfo.version = browser.version;
  });
  on("after:run",() => {
    report.generate({
      jsonDir: "./cypress/cucumberReports/json",
      reportPath: "./cypress/cucumberReports/report",
      metadata: {
        browser: {
          name: browserInfo.name,
          version: browserInfo.version,
        },
        device: "Local test machine",
        platform: {
          name: process.platform,
          version: process.version,
        },
      },
    });
  })
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
  pageLoadTimeout: 60000
});
