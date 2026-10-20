const ExcelJS = require('exceljs');

(async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('./public/CSDCI/10. Sample Question paper Fabricator.xlsx');
  
  const ws = workbook.worksheets[0];
  const images = ws.getImages();
  
  console.log(`Found ${images.length} images.`);
  
  images.forEach(image => {
    const media = workbook.model.media.find(m => m.index === image.imageId);
    console.log(`Image ID: ${image.imageId}, Extension: ${media.extension}, Size: ${media.buffer.length} bytes`);
    console.log(`Row: ${image.range.tl.nativeRow}, Col: ${image.range.tl.nativeCol}`);
  });
})();
