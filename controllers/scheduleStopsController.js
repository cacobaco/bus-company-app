import ScheduleStop from "../models/scheduleStop.js";

// GET /schedulesstops
export const getSchedulesStops = (req, res) => {
    ScheduleStop.find({}, (err, schedulesStops) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting schedule stops.",
                error: err,
            });
        }

        return res.json(schedulesStops);
    });
};

// GET /schedulesstops/:id
export const getScheduleStop = (req, res) => {
    ScheduleStop.findById(req.params.id, (err, scheduleStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting schedule stop.",
                error: err,
            });
        }

        if (!scheduleStop) {
            return res.status(404).json({
                message: "Schedule stop not found",
            });
        }

        return res.json(scheduleStop);
    });
};

// POST /schedulesstops
export const createScheduleStop = (req, res) => {
    const newScheduleStop = new ScheduleStop(req.body);

    newScheduleStop.save((err, scheduleStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving schedule stop",
                error: err,
            });
        }

        return res.json(scheduleStop);
    });
};

// PATCH /schedulesstops/:id
export const updateScheduleStop = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /schedulesstops/:id
export const deleteScheduleStop = (req, res) => {
    ScheduleStop.findByIdAndDelete(req.params.id, (err, scheduleStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting schedule stop",
                error: err,
            });
        }

        if (!scheduleStop) {
            return res.status(404).json({
                message: "Schedule stop not found",
            });
        }

        return res.json({
            message: "Schedule stop deleted successfully",
        });
    });
};
