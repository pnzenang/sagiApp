import { Router } from "express";
const router = Router();
import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
  showStats,
} from "../controllers/MemberController.js";
import {
  validateMemberInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

// router.get('/',getAllMembers)
// router.post('/',createMember)

router
  .route("/")
  .get(getAllMembers)
  .post(checkForTestUser, validateMemberInput, createMember);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getMember)
  .patch(checkForTestUser, validateMemberInput, validateIdParam, updateMember)
  .delete(checkForTestUser, validateIdParam, deleteMember);

export default router;
