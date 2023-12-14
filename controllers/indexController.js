// GET /
export const getIndex = (req, res) => {
    return res.render("index", { title: "Home" });
};
