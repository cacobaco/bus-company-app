import Pass from "../models/pass.js";

// GET /passes
export const getPasses = (req, res) => {
    Pass.find({}, (err, passes) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting passes.",
                error: err,
            });
        }

        return res.json(passes);
    });
};

// GET /passes/:id
export const getPass = (req, res) => {
    Pass.findById(req.params.id, (err, pass) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting pass.",
                error: err,
            });
        }

        if (!pass) {
            return res.status(404).json({
                message: "Pass not found",
            });
        }

        return res.json(pass);
    });
};

// POST /passes
export const createPass = (req, res) => {
    const newPass = new Pass(req.body);

    newPass.save((err, pass) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving pass",
                error: err,
            });
        }

        return res.json({
            message: "Pass saved successfully",
            pass,
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
    Pass.findByIdAndDelete(req.params.id, (err, pass) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting pass",
                error: err,
            });
        }

        if (!pass) {
            return res.status(404).json({
                message: "Pass not found",
            });
        }

        return res.json({
            message: "Pass deleted successfully",
        });
    });
};
