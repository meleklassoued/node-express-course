const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://MalikLassoued:4tWCaiK7UxsTUjDu@nodeexpresstutorial.dna5c.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log("connect to THE DB...."),
    (err) => console.log(err),
  );
