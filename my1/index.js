const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//cookie-parser

const cookieParser = require("cookie-parser");
app.use(cookieParser());

//express parsing 
app.use(express.json());


// dbms connect
require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//listen port

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})