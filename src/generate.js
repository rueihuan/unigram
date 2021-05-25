const csvToJson = require("convert-csv-to-json");

const fs = require("fs");
const folderName = "tmp";

try {
  if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
} catch (err) {
  console.error(err);
}

let fileInputName = "src/freq.csv";
let fileOutputName = "tmp/freq.json";

csvToJson
  .fieldDelimiter("\t")
  .generateJsonFileFromCsv(fileInputName, fileOutputName);
