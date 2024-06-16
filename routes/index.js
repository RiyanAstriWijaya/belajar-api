const router = require("express").Router();
const user = require("../controller/user");

router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "welcome to my api",
  });
});

router.post("/add", user.addData);
router.put("/update/:id", user.updateData);
module.exports = router;
