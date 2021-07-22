const express = require("express");
const router = express.Router();
const {
  postPeople,
  postPostman,
  putPeople,
  deletePeople,
} = require("./controllers");

router.post("/", postPeople);

router.post("/postman", postPostman);

router.put("/:id", putPeople);

router.delete("/:id", deletePeople);

module.exports = router;
