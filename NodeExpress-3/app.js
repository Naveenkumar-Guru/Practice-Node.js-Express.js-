import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

let host = "127.0.0.1";
let port = 8080;
let app = express();

app.get("/", (req, resp) => {
  return resp.json({ msg: "This is root request....." });
});

app.use(morgan("combined"));
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(port, host, (error) => {
  if (error) throw error;
  console.log(`server is running in http://${host}:${port}`);
});
