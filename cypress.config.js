const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  // implement node event listeners here
  // require("cypress-mochawesome-reporter/plugin")(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "g9bwrr",
  reporter: "cypress-mochawesome-reporter",
  defaultCommandTimeout: 7000,
  env: {
    url: "https://rahulshettyacademy.com/",
  },
  /* Run failed testcases */
  retries: {
    runMode: 1,
  },
  e2e: {
    specPattern: "cypress/integration/examples/bdd/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});

/*
cucumber reporting
json file -> html file
*/
