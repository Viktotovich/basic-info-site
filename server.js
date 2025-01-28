const express = require("express");
const app = express();
const PORT = 5173;

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
