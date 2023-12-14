import passport from "passport";

// GET /login
export const getLogin = (req, res) => {
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
