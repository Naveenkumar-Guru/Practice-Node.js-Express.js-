import { error } from "console";
import fs from "fs";

// Asynchronous
fs.readFile("employee.json", "utf-8", (error, data) => {
  if (error) throw error;

  fs.writeFile("abc.txt", data, (error) => {
    if (error) throw error;

    console.log("this is employee data:", data);
  });
});

//Async cleare code

fs.readFile("Employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log("this is error message", error);
  } else {
    console.log(".....read successfully.....");
    console.log("Employee data:", data);

    fs.writeFile("naveen.txt", data, (error) => {
      if (error) {
        console.log("writeFile error", error);
      } else {
        console.log("Employee.json data successfully written to naveen.txt");
      }
    });
  }
});
