import express from "express";
import fs from "fs";
import path from "path";
const router = express.Router();

router.get("/create", (req, resp) => {
  return resp.json({ msg: "employee create successfully" });
});

router.get("/read", async (req, resp) => {
  console.log("inside read req.....");
  let employees = await getEmployees();
  // return resp.status(200).json(employees);
  return resp
    .status(200)
    .setHeader("Content-Type", "application/json")
    .send(JSON.stringify(employees, null, 2));
  /*
   return resp
    .status(200)
    .setHeader("Content-Type", "application/json")
    .send(JSON.stringify(employees, null, 2));

| Key                  | Purpose                          |
| -------------------- | -------------------------------- |
| `setHeader()`        | Sets HTTP headers manually       |
| `"Content-Type"`     | Tells the client the data format |
| `"application/json"` | Means the response is JSON data  |

*/
});

const getEmployees = () => {
  const emp_file = path.join(process.cwd(), "data", "employee.json");
  console.log(emp_file);
  let empData = fs.readFileSync(emp_file, "utf-8");
  return JSON.parse(empData);
};

export default router;
