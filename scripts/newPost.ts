const fs = require("fs");
const readline = require("readline");

// Title, Date, Tags is required field
// Description, defer, banner, canonicalUrl is optional field

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const requiredField = ["title", "date", "tags"];
const optionalField = ["description", "defer", "banner", "canonicalUrl"];
const inputMap: { [key: string]: string } = {};

const getInput = (field: string) => {
  return new Promise((resolve, reject) => {
    console.log(`Type new post ${field}: `);

    rl.on("line", (line: string) => {
      if (line) {
        resolve(line);
        rl.close();
      } else {
        reject(new Error(`${field} is undefined.`));
      }
    });
  });
};

requiredField.forEach(async (field) => {
  const line = await getInput(field);
  console.log(line);
});

console.log("inputMap: ", inputMap);
