import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getLogin, createLogin } from "../controllers/loginController.js";

const router = Router();

// HOME PAGE
router.get("/", getIndex);

// LOGIN PAGE
router.get("/login", getLogin);
router.post("/login", createLogin);

export default router;
