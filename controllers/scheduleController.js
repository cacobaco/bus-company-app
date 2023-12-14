import Schedule from "../models/schedule.js";

// GET /schedules
export const getSchedules = (req, res) => {
    Schedule.find({}, (err, schedules) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting schedules.",
                error: err,
            });
        }

        return res.json(schedules);
    });
};

// GET /schedules/:id
export const getSchedule = (req, res) => {
    Schedule.findById(req.params.id, (err, schedule) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting schedule.",
                error: err,
            });
        }

        if (!schedule) {
            return res.status(404).json({
                message: "Schedule not found",
            });
        }

        return res.json(schedule);
    });
};

// POST /schedules
export const createSchedule = (req, res) => {
    const schedule = new Schedule({
        career: req.body.career,
    });

    schedule.save((err, schedule) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving schedule",
                error: err,
            });
        }

        return res.json({
            message: "Schedule saved successfully",
            schedule,
        });
    });
};

// PATCH /schedules/:id
export const updateSchedule = (req, res) => {
    res.json({
        message: "To be implemented",
    });
};

// DELETE /schedules/:id
export const deleteSchedule = (req, res) => {
    Schedule.findByIdAndDelete(req.params.id, (err, schedule) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting schedule",
                error: err,
            });
        }

        if (!schedule) {
            return res.status(404).json({
                message: "Schedule not found",
            });
        }

        return res.json({
            message: "Schedule deleted successfully",
        });
    });
};
