import BusStop from "../models/busStop.js";

// GET /busstops
export const getBusStops = (req, res) => {
    BusStop.find({})
        .then((busStops) => {
            return res.json(busStops);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting bus stops.",
                error: err,
            });
        });
};

// GET /busstops/:id
export const getBusStop = (req, res) => {
    BusStop.findById(req.params.id)
        .then((busStop) => {
            if (!busStop) {
                return res.status(404).json({
                    message: "Bus stop not found",
                });
            }

            return res.json(busStop);
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error getting bus stop.",
                error: err,
            });
        });
};

// POST /busstops
export const createBusStop = (req, res) => {
    const newBusStop = new BusStop(req.body);

    newBusStop
        .save()
        .then((busStop) => {
            return res.json({
                message: "Bus stop saved successfully",
                busStop,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error saving bus stop",
                error: err,
            });
        });
};

// PATCH /busstops/:id
export const updateBusStop = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /busstops/:id
export const deleteBusStop = (req, res) => {
    BusStop.findByIdAndDelete(req.params.id)
        .then((busStop) => {
            if (!busStop) {
                return res.status(404).json({
                    message: "Bus stop not found",
                });
            }

            return res.json({
                message: "Bus stop deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: "Error deleting bus stop",
                error: err,
            });
        });
};
