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
import {
    createPass,
    deletePass,
    getPass,
    getPasses,
    updatePass,
} from "../controllers/passController.js";
import {
    getCareers,
    getCareer,
    createCareer,
    updateCareer,
    deleteCareer,
} from "../controllers/careerController.js";
import {
    getSchedules,
    getSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule,
} from "../controllers/scheduleController.js";
import {
    createBusStop,
    deleteBusStop,
    getBusStop,
    getBusStops,
    updateBusStop,
} from "../controllers/busStopController.js";

const router = Router();

// PUBLIC ROUTES
router.get("/login", notAuthenticated, getLogin);
router.post("/login", notAuthenticated, createLogin);

// PRIVATE ROUTES - NORMAL USER
router.get("/", isAuthenticated, getIndex);
router.post("/logout", isAuthenticated, createLogout);

// PRIVATE ROUTES - MANAGER OR ADMIN
router.get("/careers", isAuthenticated, isManagerOrAdmin, getCareers);
router.get("/careers/:id", isAuthenticated, isManagerOrAdmin, getCareer);
router.post("/careers", isAuthenticated, isManagerOrAdmin, createCareer);
router.patch("/careers/:id", isAuthenticated, isManagerOrAdmin, updateCareer);
router.delete("/careers/:id", isAuthenticated, isManagerOrAdmin, deleteCareer);

router.get("/schedules", isAuthenticated, isManagerOrAdmin, getSchedules);
router.get("/schedules/:id", isAuthenticated, isManagerOrAdmin, getSchedule);
router.post("/schedules", isAuthenticated, isManagerOrAdmin, createSchedule);
router.patch(
    "/schedules/:id",
    isAuthenticated,
    isManagerOrAdmin,
    updateSchedule
);
router.delete(
    "/schedules/:id",
    isAuthenticated,
    isManagerOrAdmin,
    deleteSchedule
);

router.get("/busstops", isAuthenticated, isManagerOrAdmin, getBusStops);
router.get("/busstops/:id", isAuthenticated, isManagerOrAdmin, getBusStop);
router.post("/busstops", isAuthenticated, isManagerOrAdmin, createBusStop);
router.patch("/busstops/:id", isAuthenticated, isManagerOrAdmin, updateBusStop);
router.delete(
    "/busstops/:id",
    isAuthenticated,
    isManagerOrAdmin,
    deleteBusStop
);

// PRIVATE ROUTES - ADMIN
router.get("/users", isAuthenticated, isAdmin, getUsers);
router.get("/users/:id", isAuthenticated, isAdmin, getUser);
router.post("/users", isAuthenticated, isAdmin, createUser);
router.patch("/users/:id", isAuthenticated, isAdmin, updateUser);
router.delete("/users/:id", isAuthenticated, isAdmin, deleteUser);

router.get("/passes", isAuthenticated, isAdmin, getPasses);
router.get("/passes/:id", isAuthenticated, isAdmin, getPass);
router.post("/passes", isAuthenticated, isAdmin, createPass);
router.patch("/passes/:id", isAuthenticated, isAdmin, updatePass);
router.delete("/passes/:id", isAuthenticated, isAdmin, deletePass);

export default router;
