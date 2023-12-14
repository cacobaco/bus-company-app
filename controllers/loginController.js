export const getLogin = (req, res) => {
    res.render("login", { title: "Login" });
};

export const createLogin = (req, res) => {
    res.json({
        message: "To be implemented.",
    });
};
