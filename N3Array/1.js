import fs from "fs";
// let emp_Data = fs.readFileSync("Employee.json", "utf-8");
// console.log(typeof emp_Data);

// let employees = JSON.parse(emp_Data);
// for (let emp of employees) {
//   console.log(`EID:-{emp.eid},Gender:-{emp.gender}`);
//   console.log(emp.efirst_name);
// }

//m-2 find gender and array lenght

// let emp_Data = fs.readFileSync("employee.json", "utf-8");
// let employees = JSON.parse(emp_Data);
// let Male_employees = [];

// for (let emp of employees) {
//   if (emp.gender === "Male") {
//     Male_employees.push(emp);
//   }
// }

// fs.writeFileSync("NewFile-male.json", JSON.stringify(Male_employees));
// console.log("new File create successfully");

let emp_Data = fs.readFileSync("employee.json", "utf-8");
let employees = JSON.parse(emp_Data);
let male_employees = employees.filter((emp) => emp.gender === "Male");

fs.writeFileSync("NewFile-male.json", JSON.stringify(male_employees, null, 2));
console.log("New file created successfully with male employees.");



