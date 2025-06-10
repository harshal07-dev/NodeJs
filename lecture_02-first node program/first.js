const fs = require("fs");
fs.writeFile("output.txt", "Writing the first sentence.", (err) => {
  if (err) console.log("Error occured");
  else console.log("Files written succesfully");
});

const fs = require("fs");
fs.writeFile("text.txt", "Testing", (err) => {
  if (err) console.log("Error occured");
  else console.log("Files written successfully");
});
