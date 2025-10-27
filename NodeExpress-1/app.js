import express from "express";

let port = 8080;
let host = "127.0.0.1";
let app = express();

app.get("/", (req, resp) => {
  return resp.json({ msg: "this is root request" });
});

app.get("/about", (req, resp) => {
  return resp.json({ msg: "this is about page " });
});

app.get("/aa", (req, resp) => {
  return resp.json({ msg: "this is about page " });
});

app.listen(port, host, (error) => {
  if (error) throw error;
  console.log(`Server is running http://${host}:${port}`);
});
