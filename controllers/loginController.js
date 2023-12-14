// GET /login
export const getLogin = (req, res) => {
    res.render("login", { title: "Login" });
};

// POST /login
export const createLogin = (req, res) => {
    res.render("login", { title: "Login" });
};

// POST /logout
export const createLogout = (req, res) => {
    req.logout();
    res.redirect("/login");
};
