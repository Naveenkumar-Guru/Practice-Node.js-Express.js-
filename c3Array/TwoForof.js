// method-1 sync
// import fs from "fs";

// let emp_data = fs.readFileSync("TwoEmp.json", "utf-8");
// let employees = JSON.parse(emp_data);
// let male_emp = [];

// for (let emp of employees) {
//   if (emp.gender.toLowerCase() === "male") {
//     if (emp) {
//       male_emp.push(emp);
//       console.log(emp.eid);
//     }
//     // console.log(emp.eid, emp.first_name, emp.last_name);
//     // console.log(`eID:-${emp.eid},firstName:-${emp.first_name}`);
//   }
// }

import fs from "fs";

fs.readFile("TwoEmp.json", "utf-8", (error, emp_data) => {
  if (error) {
    console.log("this is error message", error);
    return;
  }

  let employees = JSON.parse(emp_data);
  let Male_employees = [];

  for (let emp of employees) {
    if (emp.gender.toLowerCase() === "male") {
      Male_employees.push(emp);
      console.log(emp.first_name, emp.eid, emp.gender);
    }
  }
  console.log(Male_employees.length);
});
