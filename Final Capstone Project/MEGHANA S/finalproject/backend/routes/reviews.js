
import  express  from "express";
import { createReview } from "./../controllers/reviewController.js";
import { verifyAdmin } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/:tourId", verifyAdmin, createReview);

export default router;