const express = require("express");

const app = express();
const port = 5000;
const people = require("./people");
auth = require("./auth");

// req=> middleware =>res

// app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false })); // besh yanalizi el donne w yhotou fel req.body

app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`<h1>hello ${name}</h1>`);
    console.log(req.body);
  }
  return res.status(401).send("do it the next timeS");
});

app.listen(port, () => {
console.log(`we are listening on this port ${port}`);
});















