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

  (async () => {
    await prependFile("dist/index.js", "module.exports = ");
  })();
} catch (err) {
  console.error(err);
}
