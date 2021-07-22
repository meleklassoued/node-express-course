const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const port = 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Task manager app");
});
app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`we are listening on the port ${port}`));
