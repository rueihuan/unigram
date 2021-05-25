const fs = require("fs");
const prependFile = require("prepend-file");

const folderName = "dist";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

try {
  if (!fs.existsSync("tmp/freq.json"))
    throw new Error("tmp/freq.json Not Found");

  fs.copyFileSync("tmp/freq.json", "dist/index.js");
  fs.copyFileSync("src/index.d.ts", "dist/index.d.ts");

  (async () => {
    await prependFile("dist/index.js", "exports.unigram = ");
  })();
} catch (err) {
  console.error(err);
}
