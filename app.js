// const mongoose = require("mongoose");
const express = require("express");

const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const expressLayouts = require('express-ejs-layouts');

const userRoutes = require("./routes/user");

const {Client} = require('pg');
const client = new Client ({
    user: "postgres",
    password: "mysecretpassword",
    host: "127.0.0.1",
    port: 5432,
    database: "postgres"
})

client.connect()
.then(() => console.log('succesfully connected to postgreSQL'))
.catch(error => console.error(error))
.finally(() => client.end());


/* mongoose.connect(
    "mongodb+srv://admin:123Banane!@clustertest.fgsnt.mongodb.net/npProject?retryWrites=true&w=majority",
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Fail to connect to database"));
*/

const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(cookieParser());
app.use(methodOverride("_method"));


app.use("/", userRoutes);


module.exports = app;