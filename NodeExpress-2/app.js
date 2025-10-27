// Import the Express module
import express from "express";

// Create an Express app instance
const app = express();

// Define server host and port
const port = 8080;
const host = "127.0.0.1";

/* -------------------- ROUTES -------------------- */

// Root route (GET)
// URL: http://127.0.0.1:8080/
app.get("/", (req, resp) => {
  return resp.json({ message: "This is the root request" });
});

// CREATE route (POST)
// URL: http://127.0.0.1:8080/api/create
app.post("/api/create", (req, resp) => {
  return resp.json({ message: "Create request " });
});

// READ route (GET)
// URL: http://127.0.0.1:8080/api/read
app.get("/api/read", (req, resp) => {
  return resp.json({ message: "Read request " });
});

// UPDATE route (PUT)
// URL: http://127.0.0.1:8080/api/update
app.put("/api/update", (req, resp) => {
  return resp.json({ message: "Update request " });
});

// DELETE route (DELETE)
// URL: http://127.0.0.1:8080/api/delete
app.delete("/api/delete", (req, resp) => {
  return resp.json({ message: "Delete request " });
});

/* -------------------- SERVER START -------------------- */

// Start the server and listen on host and port
app.listen(port, host, (error) => {
  if (error) throw error;
  console.log(` Server is running at http://${host}:${port}`);
});
