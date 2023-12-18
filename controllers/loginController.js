import passport from "passport";
import User from "../models/user.js";

// GET /login
export const getLogin = (req, res) => {
    // const newUser = new User({
    //     name: "António Costa",
    //     username: "antoniocosta",
    //     email: "antoniocosta@student.uma.pt",
    //     role: "admin",
    // });

    // User.register(newUser, "melhorpolitico", (err, user) => {
    //     if (err) {
    //         console.log(err);

    //         return res.status(500).json({
    //             message: "Error creating user",
    //             error: err,
    //         });
    //     }
    // });
    return res.render("login", { title: "Login" });
};

export const createLogin = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});

// POST /logout
export const createLogout = (req, res) => {
    req.logout();
    return res.redirect("/login");
};
