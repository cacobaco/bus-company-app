import { Router } from "express";
import {
    isAuthenticated,
    notAuthenticated,
} from "../middlewares/authMiddleware.js";
import { getIndex } from "../controllers/indexController.js";
import { getLogin, createLogin } from "../controllers/loginController.js";

const router = Router();

// PUBLIC ROUTES
router.get("/login", notAuthenticated, getLogin);
router.post("/login", notAuthenticated, createLogin);

// PRIVATE ROUTES
router.get("/", isAuthenticated, getIndex);

export default router;
