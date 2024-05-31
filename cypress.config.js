const { defineConfig } = require("cypress");
const fs = require("fs");
const ExcelJs = require("exceljs");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlserver = require("cypress-sql-server");
const excelToJson = require("convert-excel-to-json");
const { error } = require("console");
// You can reguster plugin here
async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  //setting up sql plugin
  async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, cellNumber) => {
        if (cell.value === searchText) {
          output.row = rowNumber;
          output.column = cellNumber;
        }
      });
    });

    return output;
  }

  config.db = {
    userName: "mykataadminuser",
    password: "80a5f4a9-3047-40df-b2d9-69e183e88207",
    server: "sqlserver1036917.database.windows.net",
    options: {
      database: "sqlDatabase1036917",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };

  tasks = sqlserver.loadDBPlugin(config.db);
  on("file:preprocessor", preprocessor(config));
  on("task", {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // fs.readFileSync return a Buffer
      });

      return result;
    },
  });
  // implement node event listeners here
  // require("cypress-mochawesome-reporter/plugin")(on);
  // Make sure to return the config object as it might have been modified by the plugin.

  // Excel Tasks
  on("task", {
    async WriteExcelTest({ searchText, replaceText, change, filePath }) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);

      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcel(worksheet, searchText);

      const cell = worksheet.getCell(
        output.row,
        output.column + change.colChange
      );
      cell.value = replaceText;
      return workbook.xlsx
        .writeFile(filePath)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return false;
        });
    },
  });

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
    specPattern: [
      "cypress/integration/examples/bdd/*.feature",
      "cypress/integration/examples/*.js",
    ],
    supportFile: false,
    setupNodeEvents,
  },
});

/*
cucumber reporting
json file -> html file
*/
