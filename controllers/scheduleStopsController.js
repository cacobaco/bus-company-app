import ScheduleStop from "../models/scheduleStop.js";

// GET /schedulesstops
export const getSchedulesStops = (req, res) => {
    ScheduleStop.find({})
        .then((schedulesStops) => {
            return res.json(schedulesStops);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting schedule stops.",
                error: err,
            });
        });
};

// GET /schedulesstops/:id
export const getScheduleStop = (req, res) => {
    ScheduleStop.findById(req.params.id)
        .then((scheduleStop) => {
            if (!scheduleStop) {
                return res.status(404).json({
                    message: "Schedule stop not found",
                });
            }

            return res.json(scheduleStop);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting schedule stop.",
                error: err,
            });
        });
};

// POST /schedulesstops
export const createScheduleStop = (req, res) => {
    const newScheduleStop = new ScheduleStop(req.body);

    newScheduleStop
        .save()
        .then((scheduleStop) => {
            return res.json({
                message: "Schedule stop saved successfully",
                scheduleStop,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error saving schedule stop",
                error: err,
            });
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
    ScheduleStop.findByIdAndDelete(req.params.id)
        .then((scheduleStop) => {
            if (!scheduleStop) {
                return res.status(404).json({
                    message: "Schedule stop not found",
                });
            }

            return res.json({
                message: "Schedule stop deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error deleting schedule stop",
                error: err,
            });
        });
};
