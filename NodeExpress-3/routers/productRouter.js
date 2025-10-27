import express from "express";

let router = express.Router();

router.post("/", (req, resp) => {
  return resp.json({ msg: "product is create successfully" });
});

router.get("/all", (req, resp) => {
  return resp.json({ msg: "show all products" });
});

router.put("/:pid", (req, resp) => {
  let prod_id = req.params.pid;
  console.log(prod_id);
  return resp.json({ msg: "product id create", "product id": prod_id });
});

router.delete("/:pid", (req, resp) => {
  let prod_Id = req.params.pid;
  console.log(prod_Id);
  return resp.json({ msg: "Product delete", "Product Id": prod_Id });
});

export default router;
