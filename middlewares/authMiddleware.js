export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
};

export const notAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect("/");
    } else {
        next();
    }
};
