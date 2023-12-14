import createError from "http-errors";
import express, { json, urlencoded, static as static_ } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import Strategy from "passport-local";

import User from "./models/user.js";
import router from "./routes/routes.js";

// database setup
mongoose
    .connect(
        "mongodb+srv://user:9gi86UGuDE6E9hbD@cluster0.klo1mxd.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB Atlas", err);
    });

// web server setup
var app = express();

// passport setup
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new Strategy(User.authenticate()));

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static_(join(__dirname, "public")));

// routes setup
app.use(router);

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

export default app;
