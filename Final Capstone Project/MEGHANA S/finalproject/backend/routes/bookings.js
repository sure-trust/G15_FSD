
import express from "express";

import { verifyAdmin, verifyUser } from "../utils/verifyUser.js";
import { createBooking, getBooking, getAllBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;