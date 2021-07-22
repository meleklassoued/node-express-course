const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`<h1>hello ${name}</h1>`);
    console.log(req.body);
  }
  return res.status(401).send("do it the next timeS");
});

module.exports = router;
