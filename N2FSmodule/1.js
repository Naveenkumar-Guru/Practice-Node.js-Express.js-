import fs from "fs";

// readfiles.. by using sync
let Data = fs.readFileSync("one.txt", "utf-8");
console.log(Data);

//writeFile by using sync
fs.writeFileSync("xyz.txt", Data);
console.log(Data);

//renameFile name by using sync
fs.renameSync("xyz.txt", "naveen.txt", Data);
console.log(Data);
