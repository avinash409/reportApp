var express = require("express");
const { createStatusReport, getStatusReport } = require("./statusReportHandler");
const tokenHandler = require("./tokenHandler");
var app = express();

app.get("/health", function (req, res) {
  res.send("ok");
});

app.get("/auth", tokenHandler);

app.get("/statusReport", tokenHandler, createStatusReport);

app.get("/statusReport/:jobid", tokenHandler, getStatusReport);

app.listen(3000, "", () => {
  console.log("listening in PORT 3000");
});
