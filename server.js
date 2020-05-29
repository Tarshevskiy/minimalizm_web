// var express = require("express");
// var app = express();
// app.use(express.static("public"));

// app.use(function log(req, res, next) {
//   console.log('test');
//   next();
// });

// app.listen(3333, function () {
//   console.log("listetning on 3333....");
// });

// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res)=>{
//   res.end('Maximum minimalizm')
//   let someObj = {name: 'Slavon'}
//   console.log("someObj", someObj)
// })

// server.listen(3001, () => console.log("better than google"))
const ALLOWED_ORIGINS = ["http://home.com", "http://127.0.0.1:3001"];
const express = require("express");
const session = require("express-session");
const app = express();
const port = 3001;
const sessionOptions = {
  secret: "123456",
  cookie: {
    maxAge: 269999999999,
  },
  saveUninitialized: true,
  resave: true,
};
app.use(session(sessionOptions));
app.options("*", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send("ok");
});
app.get("/public", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send(
    JSON.stringify({
      validation: [
        { id: 157, email: "sobachka@gav.com", password: "hateKittyKat" },
        { id: 777, email: "blatnoy@oh.yes", password: "password" },
        { id: 001, email: "freddie@song.com", password: "underPressure" },
      ],
    })
  );
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
