import Career from "../models/career.js";

// GET /careers
export const getCareers = (req, res) => {
    Career.find({})
        .then((careers) => {
            return res.json(careers);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting careers.",
                error: err,
            });
        });
};

// GET /careers/:id
export const getCareer = (req, res) => {
    Career.findById(req.params.id)
        .then((career) => {
            if (!career) {
                return res.status(404).json({
                    message: "Career not found",
                });
            }

            return res.json(career);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting career.",
                error: err,
            });
        });
};

// POST /careers
export const createCareer = (req, res) => {
    const newCareer = new Career(req.body);

    newCareer
        .save()
        .then((career) => {
            return res.json({
                message: "Career saved successfully",
                career,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error saving career",
                error: err,
            });
        });
};

// PATCH /careers/:id
export const updateCareer = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /careers/:id
export const deleteCareer = (req, res) => {
    Career.findByIdAndDelete(req.params.id)
        .then((career) => {
            if (!career) {
                return res.status(404).json({
                    message: "Career not found",
                });
            }

            return res.json({
                message: "Career deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error deleting career",
                error: err,
            });
        });
};
