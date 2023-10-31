import express from "express";
import {
  createTour,
  deleteTour,
  updateTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from "./../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyUser.js"
const router = express.Router();

router.post("/", verifyAdmin, createTour);

router.put("/:id", verifyAdmin, updateTour);

router.delete("/:id", verifyAdmin, deleteTour);

router.get("/:id", getSingleTour);

router.get("/", getAllTour);

// Define your search route
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
