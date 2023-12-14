import Career from "../models/career.js";

// GET /careers
export const getCareers = (req, res) => {
    Career.find({}, (err, careers) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting careers.",
                error: err,
            });
        }

        return res.json(careers);
    });
};

// GET /careers/:id
export const getCareer = (req, res) => {
    Career.findById(req.params.id, (err, career) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting career.",
                error: err,
            });
        }

        if (!career) {
            return res.status(404).json({
                message: "Career not found",
            });
        }

        return res.json(career);
    });
};

// POST /careers
export const createCareer = (req, res) => {
    const career = new Career({
        code: req.body.code,
        schedule: req.body.schedule,
    });

    career.save((err, career) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving career",
                error: err,
            });
        }

        return res.json({
            message: "Career saved successfully",
            career,
        });
    });
};

// PATCH /careers/:id
export const updateCareer = (req, res) => {
    res.json({
        message: "To be implemented",
    });
};

// DELETE /careers/:id
export const deleteCareer = (req, res) => {
    Career.findByIdAndDelete(req.params.id, (err, career) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting career",
                error: err,
            });
        }

        if (!career) {
            return res.status(404).json({
                message: "Career not found",
            });
        }

        return res.json({
            message: "Career deleted successfully",
        });
    });
};
