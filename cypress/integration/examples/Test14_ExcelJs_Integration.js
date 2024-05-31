/// <reference types='Cypress'/>

// https://learning.oreilly.com/interactive-lab/working-with-azure/9781098132101/lab/
describe("Excel upload and download", () => {
  it("Testing excel upload an download", () => {
    const replaceNum = 350;
    const replaceText = "Kivi";
    const FilePath =
      Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";
    cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
    cy.get("button#downloadButton").click();
    cy.task("WriteExcelTest", {
      searchText: replaceText,
      replaceText: replaceNum,
      change: { rowChange: 0, colChange: 2 },
      filePath: FilePath,
    });
    cy.get(".upload").selectFile(FilePath);
    cy.contains(replaceText)
      .parent()
      .parent()
      .find("#cell-4-undefined")
      .should("have.text", replaceNum);
  });
});

// const ExcelJs = require("exceljs");

// async function WriteExcelTest(searchText, replaceText, change, filePath) {
//   const workbook = new ExcelJs.Workbook();
//   await workbook.xlsx.readFile(filePath);

//   const worksheet = workbook.getWorksheet("Sheet1");
//   const output = await readExcel(worksheet, searchText);

//   const cell = worksheet.getCell(output.row, output.column + change.colChange);
//   cell.value = replaceText;
//   await workbook.xlsx.writeFile(filePath);
// }

// async function readExcel(worksheet, searchText) {
//   let output = { row: -1, column: -1 };
//   worksheet.eachRow((row, rowNumber) => {
//     row.eachCell((cell, cellNumber) => {
//       if (cell.value === searchText) {
//         output.row = rowNumber;
//         output.column = cellNumber;
//       }
//     });
//   });

//   return output;
// }

// WriteExcelTest(
//   "Mango",
//   350,
//   { rowChange: 0, colChange: 3 },
//   "C:/Users/sarka/projects/Learning_Cypress_Automation/download.xlsx"
// );
