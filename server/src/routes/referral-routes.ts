import { Router } from "express";
import {
  getReferrals,
  createReferral,
} from "../controllers/referral-controller";

const router = Router();

router.get("/", getReferrals);
router.post("/", createReferral);

export default router;
