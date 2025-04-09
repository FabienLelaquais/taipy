const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, process.argv[4]);
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const outputPath = path.join(distDir, process.argv[2]);
fs.writeFileSync(outputPath, `console.log(\"Hello from mock ${process.argv[3]} build for ${process.argv[2]}\");\n`);
console.log(`Wrote mock build to ${outputPath}`);
