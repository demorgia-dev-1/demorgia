const ExcelJS = require('exceljs');

(async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('./public/CSDCI/10. Sample Question paper Fabricator.xlsx');
  
  const worksheet = workbook.worksheets[0];
  
  const imagesByRowCol = {};
  for (const image of worksheet.getImages()) {
    const row = image.range.tl.nativeRow; 
    const col = image.range.tl.nativeCol; 
    const dataUrl = `[IMAGE]`;
    if (!imagesByRowCol[row]) imagesByRowCol[row] = {};
    imagesByRowCol[row][col] = dataUrl;
  }
  
  console.log("Images found at rows:", Object.keys(imagesByRowCol));

  const rowCount = worksheet.rowCount;
  const colCount = worksheet.columnCount;
  const jsonData = [];
  
  for (let i = 1; i <= rowCount; i++) {
    const rowValues = [];
    const row = worksheet.getRow(i);
    for (let j = 1; j <= (colCount || 10); j++) {
      const cell = row.getCell(j);
      let val = cell.value;
      if (val !== null && val !== undefined) {
        if (typeof val === 'object' && val.richText) val = val.richText.map(t => t.text).join("");
        else if (typeof val === 'object' && val.sharedFormula) val = val.result !== undefined ? val.result : "";
        else if (val instanceof Date) val = val.toString();
      } else val = "";
      rowValues.push(String(val).trim());
    }
    jsonData.push(rowValues);
  }

  let headerIdx = 6; 
  const questions = [];
  let currentQuestion = null;

  for (let i = headerIdx + 1; i < 20; i++) {
    const r = jsonData[i] || [];
    const rowImages = imagesByRowCol[i] || {};
    
    const qNum = String(r[0] || "").trim();
    const qText = String(r[1] || "").trim();
    
    const hasAnyContent = qNum || qText || r[2] || r[3] || r[4] || r[5] || r[6] || Object.keys(rowImages).length > 0;
    console.log(`Row ${i}: qNum='${qNum}', qText='${qText}', hasContent=${hasAnyContent}, images=${Object.keys(rowImages)}`);
    if (!hasAnyContent) continue;

    if (qNum !== "") {
      currentQuestion = { num: qNum, options: [] };
      questions.push(currentQuestion);
      if (rowImages[1]) currentQuestion.image = rowImages[1];
    } else if (currentQuestion) {
      if (rowImages[1]) currentQuestion.image = rowImages[1];
    }
  }

  console.log("Questions with images:", questions.filter(q => q.image));
})();
