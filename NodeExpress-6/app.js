import express from "express";

const port = 8080;
const host = "127.0.0.1";
const mongo_db_url = "mongodb://localhost:27017/oct-nodeExpress5";

const app = express();

app.get("/", (req, resp) => {
  return resp.status(200).json({ msg: "Appliction root request" });
});

app.listen(port, host, (error) => {
  if (error) throw error;
  console.log(`Server running in http://${host}:${port}`);
});
