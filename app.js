const expres = require("express");
const router = require("./routes");
const app = expres();

app.use(expres.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
