import BusStop from "../models/busStop.js";

// GET /busstops
export const getBusStops = (req, res) => {
    BusStop.find({}, (err, busStops) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting bus stops.",
                error: err,
            });
        }

        return res.json(busStops);
    });
};

// GET /busstops/:id
export const getBusStop = (req, res) => {
    BusStop.findById(req.params.id, (err, busStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting bus stop.",
                error: err,
            });
        }

        if (!busStop) {
            return res.status(404).json({
                message: "Bus stop not found",
            });
        }

        return res.json(busStop);
    });
};

// POST /busstops
export const crateBusStop = (req, res) => {
    const busStop = new BusStop({
        name: req.body.name,
        location: req.body.location,
    });

    busStop.save((err, busStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving bus stop",
                error: err,
            });
        }

        return res.json({
            message: "Bus stop saved successfully",
            busStop,
        });
    });
};

// PATCH /busstops/:id
export const updateBusStop = (req, res) => {
    res.json({
        message: "To be implemented",
    });
};

// DELETE /busstops/:id
export const deleteBusStop = (req, res) => {
    BusStop.findByIdAndDelete(req.params.id, (err, busStop) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting bus stop",
                error: err,
            });
        }

        if (!busStop) {
            return res.status(404).json({
                message: "Bus stop not found",
            });
        }

        return res.json({
            message: "Bus stop deleted successfully",
        });
    });
};
