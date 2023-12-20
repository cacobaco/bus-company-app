import passport from "passport";
import User from "../models/user.js";

// GET /login
export const getLogin = (req, res) => {
    return res.render("login", { title: "Login" });
};

// POST /login
export const createLogin = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});

export const getRegister = (req, res) => {
    return res.render("register", { title: "Register" });
};

export const createRegister = (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        role: "user",
    });

    User.register(user, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.redirect("/register");
        }

        passport.authenticate("local")(req, res, () => {
            res.redirect("/");
        });
    });
};

// GET /logout
export const getLogout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Error logging out",
                error: err,
            });
        }

        return res.redirect("/login");
    });
};
