import { Router } from "express";
import {
    isAuthenticated,
    notAuthenticated,
} from "../middlewares/authMiddleware.js";
import {
    isManager,
    isAdmin,
    isManagerOrAdmin,
} from "../middlewares/roleMiddleware.js";
import { getIndex } from "../controllers/indexController.js";
import {
    getLogin,
    createLogin,
    createLogout,
} from "../controllers/loginController.js";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";

const router = Router();

// PUBLIC ROUTES
router.get("/login", notAuthenticated, getLogin);
router.post("/login", notAuthenticated, createLogin);

// PRIVATE ROUTES - NORMAL USER
router.get("/", isAuthenticated, getIndex);
router.post("/logout", isAuthenticated, createLogout);

// PRIVATE ROUTES - MANAGER

// PRIVATE ROUTES - ADMIN
router.get("/users", isAuthenticated, isAdmin, getUsers);
router.get("/users/:id", isAuthenticated, isAdmin, getUser);
router.post("/users", isAuthenticated, isAdmin, createUser);
router.patch("/users/:id", isAuthenticated, isAdmin, updateUser);
router.delete("/users/:id", isAuthenticated, isAdmin, deleteUser);

export default router;
