const router = require("express").Router();
const user = require("../controller/user");

router.post("/add", user.addData);
module.exports = router;
