export const isManager = (req, res, next) => {
    if (req.user.isManager) {
        next();
    } else {
        res.redirect("/");
    }
};

export const notManager = (req, res, next) => {
    if (req.user.isManager) {
        res.redirect("/");
    } else {
        next();
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next();
    } else {
        res.redirect("/");
    }
};

export const notAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        res.redirect("/");
    } else {
        next();
    }
};
