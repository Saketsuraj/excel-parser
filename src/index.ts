// index.ts
import { readExcel } from './excelReader';
import { processExcelData } from './dataProcessor';
import { writeJsonLines } from './jsonWriter';

const inputFilePath = './iw-tech-test-retailer-data.xlsx';
const outputFilePath = 'output.jsonl';

const sheet = readExcel(inputFilePath);
const jsonData = processExcelData(sheet);
writeJsonLines(jsonData, outputFilePath);

