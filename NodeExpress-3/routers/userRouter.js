import express from "express";

let router = express.Router();

router.post("/", (req, resp) => {
  return resp.json({ msg: "User is create successfull" });
});

router.get("/all", (req, resp) => {
  return resp.json({ user: "getting all users" });
});

router.put("/:uid", (req, resp) => {
  let uid = req.params.uid;
  console.log(uid);
  return resp.json({ msg: "User updated", uid: uid });
});

router.delete("/:uid", (req, resp) => {
  let uid = req.params.uid;
  console.log(uid);
  return resp.json({ msg: "user delete", uid: "uid" });
});

export default router;

