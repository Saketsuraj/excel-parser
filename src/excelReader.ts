// excelReader.ts
import * as XLSX from 'xlsx';

export function readExcel(filePath: string): XLSX.WorkSheet {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  return workbook.Sheets[sheetName];
}

