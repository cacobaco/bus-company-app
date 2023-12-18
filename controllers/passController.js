import Pass from "../models/pass.js";

// GET /passes
export const getPasses = (req, res) => {
    Pass.find({})
        .then((passes) => {
            return res.json(passes);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting passes.",
                error: err,
            });
        });
};

// GET /passes/:id
export const getPass = (req, res) => {
    Pass.findById(req.params.id)
        .then((pass) => {
            if (!pass) {
                return res.status(404).json({
                    message: "Pass not found",
                });
            }

            return res.json(pass);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting pass.",
                error: err,
            });
        });
};

// POST /passes
export const createPass = (req, res) => {
    const newPass = new Pass(req.body);

    newPass
        .save()
        .then((pass) => {
            return res.json({
                message: "Pass saved successfully",
                pass,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error saving pass",
                error: err,
            });
        });
};

// PATCH /passes/:id
export const updatePass = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /passes/:id
export const deletePass = (req, res) => {
    Pass.findByIdAndDelete(req.params.id)
        .then((pass) => {
            if (!pass) {
                return res.status(404).json({
                    message: "Pass not found",
                });
            }

            return res.json({
                message: "Pass deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error deleting pass",
                error: err,
            });
        });
};
