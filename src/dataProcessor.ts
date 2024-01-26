// dataProcessor.ts
import * as XLSX from 'xlsx';
import { IndexEntry } from './types';

export function processExcelData(sheet: XLSX.WorkSheet): IndexEntry[] {
  const jsonData: IndexEntry[] = [];

  const startRow = 2;
  const endRow = sheet['!ref'] ? XLSX.utils.decode_range(sheet['!ref']).e.r : 0;

  for (let i = startRow; i <= endRow; i++) {
    const entry: IndexEntry = {
      name: sheet[`A${i}`]?.v,
      contact: {
        email: sheet[`C${i}`]?.v,
        fax: sheet[`D${i}`]?.v,
        mobile: sheet[`E${i}`]?.v,
        phone: sheet[`F${i}`]?.v,
        website: sheet[`G${i}`]?.v,
      },
      location: {
        street: sheet[`H${i}`]?.v,
        city: sheet[`I${i}`]?.v,
        country: sheet[`J${i}`]?.v,
        address: sheet[`K${i}`]?.v,
        lat: sheet[`L${i}`]?.v,
        lng: sheet[`M${i}`]?.v,
        zip: sheet[`N${i}`]?.v,
        state: sheet[`O${i}`]?.v,
      },
      social: {
        facebook: sheet[`P${i}`]?.v,
        googleplus: sheet[`Q${i}`]?.v,
        twitter: sheet[`R${i}`]?.v,
      },
      status: sheet[`S${i}`]?.v,
      title: sheet[`T${i}`]?.v,
    };

    jsonData.push(entry);
  }

  return jsonData;
}

