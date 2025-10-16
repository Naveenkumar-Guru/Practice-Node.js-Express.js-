import fs from "fs";

fs.readFile("abc.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log("...this is error msg...");
  fs.writeFile("xyz.txt", data, (error) => {
    if (error) throw error;
    console.log(".....New file created successfully.....");
  });
});

// import fs from "fs";

// fs.readFile("abc.txt", "utf-8", (error, Data) => {
//   if (error) {
//     console.log("Error reading file:", error);
//   } else {
//     console.log("File read successfully......!");
//   }

//   fs.writeFile("xyz.txt", Data, (error) => {
//     if (error) {
//       console.log("Error writing file:", error);
//     } else {
//       console.log("New file created successfully......!");
//     }
//   });
// });
