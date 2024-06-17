const router = require("express").Router();
const user = require("../controller/user");

router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "welcome to my api",
  });
});

router.get("/showall", user.tampilSemua);
router.get("/:id", user.tampilId);
router.post("/add", user.addData);
router.post("/add", user.addData);
router.put("/update/:id", user.updateData);
router.delete("/delete/:id", user.deleteData);
module.exports = router;
