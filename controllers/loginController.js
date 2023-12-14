// GET /login
export const getLogin = (req, res) => {
    return res.render("login", { title: "Login" });
};

// POST /login
export const createLogin = (req, res) => {
    return res.render("login", { title: "Login" });
};

// POST /logout
export const createLogout = (req, res) => {
    req.logout();
    return res.redirect("/login");
};
