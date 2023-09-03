const express = require("express");
const app = express();
app.get("/", (req, resp) => {
  let date = new Date();
  let DD = date.getDay();
  let MM = date.getMonth();
  let YYYY = date.getFullYear();
  resp.send(`${DD}-${MM}-${YYYY}`);
});
app.listen(3000);
module.exports = app;
