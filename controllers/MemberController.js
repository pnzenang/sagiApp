import Member from "../models/memberModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";
import { customAlphabet } from "nanoid";
import User from "../models/UserModel.js";

const randomMatriculation = customAlphabet("1234567890", 6);

export const getAllMembers = async (req, res) => {
  const { search, memberStatus, delegateRecommendation, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
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

export const VestedAllMembers = async (req, res) => {
  const { search, memberStatus, delegateRecommendation, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
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

export const createMember = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  req.body.createdBy = req.user.userId;
  req.body.associationName = user.associationName;
  req.body.associationCode = user.associationCode;
  req.body.memberMatriculation = `AS${user.associationCode.toLocaleUpperCase()}${randomMatriculation()}`;
  const member = await Member.create(req.body);
  res.status(StatusCodes.CREATED).json({ member });
};

export const getMember = async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.status(StatusCodes.OK).json({ member });
};

export const updateMember = async (req, res) => {
  const updatedMember = await Member.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: "member modified", member: updatedMember });
};

export const deleteMember = async (req, res) => {
  const removedMember = await Member.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: "member deleted", member: removedMember });
};

export const showStats = async (req, res) => {
  let stats = await Member.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$memberStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    waiting: stats.waiting || 0,
    vested: stats.vested || 0,
    transferred: stats.transferred || 0,
    excluded: stats.excluded || 0,
    deceased: stats.deceased || 0,
  };

  let monthlyApplications = await Member.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
