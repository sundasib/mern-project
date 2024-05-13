var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// routes
//import api

//var userroutes = require("./routes/userRouter");
var userRouter = require("./routes/userRouter");
var authrouter = require("./routes/authRouter");
//var sign = require("./routes/userRouter");
var app = express();

// view engine setup
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credendtials: true,
  })
);
// import api

/*app.use("/user", userroutes);*/
//app.use("/user", sign);
app.use("/user", userRouter);
app.use("/auth", authrouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
