import mongoose from "mongoose";
import { MEMBER_STATUS, DELEGATE_RECOMMENDATION } from "../utils/constants.js";
const MemberSchema = new mongoose.Schema(
  {
    associationName: String,
    associationCode: String,
    memberFirstName: String,
    lastAndMiddleName: String,
    dateOfBirth: Date,
    memberStatus: {
      type: String,
      enum: Object.values(MEMBER_STATUS),
      default: MEMBER_STATUS.PENDING,
    },
    delegateRecommendation: {
      type: String,
      enum: Object.values(DELEGATE_RECOMMENDATION),
      default: DELEGATE_RECOMMENDATION.CONFIRM,
    },
    memberMatriculation: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", MemberSchema);
