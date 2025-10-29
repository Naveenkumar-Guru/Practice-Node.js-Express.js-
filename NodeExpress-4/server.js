import express from "express";
import morgan from "morgan";
import chalk from "chalk";
import empRouter from "./router/empRouter.js";

const port = 8080;
const host = "127.0.0.1";
const app = express();

app.use("/emp", empRouter);

/*
app.use(morgan("tiny"));       // Minimal output (method, URL, status, response time)
app.use(morgan("combined"));   // Apache-style detailed logs (remote user, date, referrer, etc.)
app.use(morgan("common"));     // Standard Apache common log output
app.use(morgan("short"));      // Shorter than 'common' (method, URL, status, response time)
app.use(morgan("dev"));        // Colorful concise logs for development (method, URL, status, time)
app.use(morgan("default"));    // Alias for 'combined' (same output)
app.use(morgan("apache"));     // Same as 'combined' (used in some setups)
*/
// app.use(morgan("dev"));
app.use(morgan("combined"));
// app.use(morgan("apache"));

app.get("/", (req, resp) => {
  resp.status(200).json({ msg: "application Root Request!" });
});

app.listen(port, host, (error) => {
  if (error) throw error;
  //   console.log(`server is running... in http://${host}:${port}`);
  console.log(chalk.blue(`server is running... in http://${host}:${port}`));
});
