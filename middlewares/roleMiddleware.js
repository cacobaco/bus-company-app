export const isManager = (req, res, next) => {
    if (req.user.role === "manager") {
        next();
    } else {
        res.redirect("/");
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        res.redirect("/");
    }
};

export const isManagerOrAdmin = (req, res, next) => {
    if (req.user.role === "manager" || req.user.role === "admin") {
        next();
    } else {
        res.redirect("/");
    }
};
