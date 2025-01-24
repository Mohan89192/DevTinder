const express = require("express");

const app = express();

app.use("/Hello", (req, res) => {
  res.send("Hello World!!");
});

app.listen(4000, () => {
  console.log("Server Successfully running at 4000");
});
