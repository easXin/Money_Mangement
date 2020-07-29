
const connectDb =require("./db/connection");
connectDb();
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");

// Body parser middleware, for http post header
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
require("./config/passport")(passport);

// Member API router
app.use('/api/users', users);
// initialize passortjs


const PORT = process.env.PORT || 5000;



app.listen(PORT, () =>
    console.log(`Serve starts at Port ${PORT}`)
);