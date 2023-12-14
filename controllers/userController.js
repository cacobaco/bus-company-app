import User from "../models/user.js";

// GET /users
export const getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting users.",
                error: err,
            });
        }

        return res.json(users);
    });
};

// GET /users/:id
export const getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).json({
                message: "Error getting user.",
                error: err,
            });
        }

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json(user);
    });
};

// POST /users
export const createUser = (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        pass: req.body.pass,
        isManager: req.body.isManager,
        isAdmin: req.body.isAdmin,
    });

    User.register(user, req.body.password, (err, user) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Error creating user",
                error: err,
            });
        }

        return res.json({
            message: "User created successfully",
            user,
        });
    });
};

// PATCH /users/:id
export const updateUser = (req, res) => {
    return res.json({
        message: "To be implemented",
    });
};

// DELETE /users/:id
export const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting user",
                error: err,
            });
        }

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json({
            message: "User deleted successfully",
        });
    });
};
