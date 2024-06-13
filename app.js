const expres = require("express");
const app = expres();
const router = require("./routes");

app.use(expres.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
