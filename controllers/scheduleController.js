import Schedule from "../models/schedule.js";

// GET /schedules
export const getSchedules = (req, res) => {
    Schedule.find({})
        .then((schedules) => {
            return res.json(schedules);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting schedules.",
                error: err,
            });
        });
};

// GET /schedules/:id
export const getSchedule = (req, res) => {
    Schedule.findById(req.params.id)
        .then((schedule) => {
            if (!schedule) {
                return res.status(404).json({
                    message: "Schedule not found",
                });
            }

            return res.json(schedule);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting schedule.",
                error: err,
            });
        });
};

// POST /schedules
export const createSchedule = (req, res) => {
    const newSchedule = new Schedule(req.body);

    newSchedule
        .save()
        .then((schedule) => {
            return res.json({
                message: "Schedule saved successfully",
                schedule,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error saving schedule",
                error: err,
            });
        });
};

// PATCH /schedules/:id
export const updateSchedule = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /schedules/:id
export const deleteSchedule = (req, res) => {
    Schedule.findByIdAndDelete(req.params.id)
        .then((schedule) => {
            if (!schedule) {
                return res.status(404).json({
                    message: "Schedule not found",
                });
            }

            return res.json({
                message: "Schedule deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error deleting schedule",
                error: err,
            });
        });
};
