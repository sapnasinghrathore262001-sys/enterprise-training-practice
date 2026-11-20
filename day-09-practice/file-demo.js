const fs = require("fs");

const message = "Learning Node.js File System";

fs.writeFileSync("sample.txt", message);

const data = fs.readFileSync("sample.txt", "utf8");

console.log("File content:", data);
