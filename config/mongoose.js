const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/habit_tracking_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.log(err));
