const ExcelJs = require("exceljs");

async function WriteExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet("Sheet1");
  const output = await readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

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

WriteExcelTest(
  "Mango",
  350,
  { rowChange: 0, colChange: 3 },
  "C:/Users/sarka/projects/Learning_Cypress_Automation/download.xlsx"
);
