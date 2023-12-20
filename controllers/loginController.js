import passport from "passport";

// GET /login
export const getLogin = (req, res) => {
    return res.render("login", { title: "Login" });
};

// POST /login
export const createLogin = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});

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
