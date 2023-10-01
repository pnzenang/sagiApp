import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Member from "../models/memberModel.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const members = await Member.countDocuments();
  res.status(StatusCodes.OK).json({ users, members });
};

export const getAllMembersAdmin = async (req, res) => {
  const { search, memberStatus, delegateRecommendation, sort } = req.query;

  const queryObject = {
    // createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { associationName: { $regex: search, $options: "i" } },
      { lastAndMiddleName: { $regex: search, $options: "i" } },
      { firstName: { $regex: search, $options: "i" } },
    ];
  }

  if (memberStatus && memberStatus !== "all") {
    queryObject.memberStatus = memberStatus;
  }
  if (delegateRecommendation && delegateRecommendation !== "all") {
    queryObject.delegateRecommendation = delegateRecommendation;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "lastAndMiddleName",
    "z-a": "-lastAndMiddleName",
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const members = await Member.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalMembers = await Member.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalMembers / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalMembers, numOfPages, currentPage: page, members });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "update user" });
};
