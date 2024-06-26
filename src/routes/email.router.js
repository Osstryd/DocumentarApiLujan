import { Router } from "express";
import { sendGmail } from "../controllers/email.controllers.js";

const router = Router();

router.post('/gmail', sendGmail)

export default router;