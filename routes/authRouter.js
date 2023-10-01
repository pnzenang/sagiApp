import { Router } from "express";
const router = Router();
import {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
  validateResetPasswordInput,
} from "../middleware/validationMiddleware.js";

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});

router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", validateResetPasswordInput, resetPassword);
router.get("/logout", logout);

export default router;
