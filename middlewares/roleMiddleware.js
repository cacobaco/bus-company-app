export const isManager = (req, res, next) => {
    if (req.user.isManager) {
        next();
    } else {
        res.redirect("/");
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next();
    } else {
        res.redirect("/");
    }
};

export const isManagerOrAdmin = (req, res, next) => {
    if (req.user.isManager || req.user.isAdmin) {
        next();
    } else {
        res.redirect("/");
    }
};
