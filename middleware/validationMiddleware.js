import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { MEMBER_STATUS, DELEGATE_RECOMMENDATION } from "../utils/constants.js";
import mongoose from "mongoose";
import Member from "../models/memberModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));
        if (errorMessages[0].startsWith("no member")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateMemberInput = withValidationErrors([
  body("associationName")
    .notEmpty()
    .withMessage("association name is required"),
  body("lastAndMiddleName")
    .notEmpty()
    .withMessage("last name is required is required"),
  body("memberStatus")
    .isIn(Object.values(MEMBER_STATUS))
    .withMessage("invalid status value"),
  body("delegateRecommendation")
    .isIn(Object.values(DELEGATE_RECOMMENDATION))
    .withMessage("invalid type value"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const member = await Member.findById(value);
    if (!member) throw new NotFoundError(`no member with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === member.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to access this route");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("associationName")
    .notEmpty()
    .withMessage("associationName is required")
    .trim()
    .isLength({ min: 5 }),
  body("associationCode")
    .notEmpty()
    .withMessage("association code is required")
    .isLength(4),
  body("lastAndMiddleName")
    .notEmpty()
    .withMessage("last And/or Middle Name are required"),
  body("dateOfBirth").notEmpty().withMessage("date of birth is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("telephoneNumber")
    .notEmpty()
    .withMessage("telephone number is required")
    .isMobilePhone()
    .withMessage("invalid telephone number format"),
  body("streetAddress").notEmpty().withMessage("street address is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("zipCode").notEmpty().withMessage("zip code is required").isLength(5),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);
export const validateResetPasswordInput = withValidationErrors([
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("associationName")
    .notEmpty()
    .withMessage("association's name is required"),
  body("lastAndMiddleName").notEmpty().withMessage("last name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("telephoneNumber")
    .notEmpty()
    .withMessage("telephone number is required")
    .isMobilePhone()
    .withMessage("invalid phone number format"),

  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
]);
