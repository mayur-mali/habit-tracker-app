const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const app = express();

//-----DB Config---------//
const db = require("./config/mongoose");

//-----EJS---------//
app.use(expressLayouts);
app.use("/assets", express.static("./assets"));
app.set("view engine", "ejs");

//------BodyParser--------//
app.use(express.urlencoded({ extended: false }));

//---------Express Session----------//
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//-----Routes---------//
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log(`Server started on port  ${PORT}`));
