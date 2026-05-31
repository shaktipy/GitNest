import Repository from "../models/Repository.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import paginate, { buildPaginationMeta } from "../utils/paginate.js";
import { sendSuccess } from "../utils/responseHandlers.js";

const textSearchRegex = (term) => new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

export const searchRepositories = asyncHandler(async (req, res) => {
  const { q, language, topic, visibility } = req.query;
  const { page, limit, skip } = paginate(req.query.page, req.query.limit);

  const textFilter = [];

  if (q) {
    const escaped = textSearchRegex(q);
    textFilter.push(
      { name: escaped },
      { description: escaped },
      { topics: escaped },
    );
  }

  const filter = textFilter.length > 0 ? { $or: textFilter } : {};

  if (language) {
    filter.language = { $regex: textSearchRegex(language) };
  }

  if (topic) {
    filter.topics = { $regex: textSearchRegex(topic) };
  }

  if (visibility && req.user?.id) {
    filter.visibility = visibility;
    if (visibility === "private") {
      filter.owner = req.user.id;
    }
  } else if (req.user?.id) {
    filter.$and = [
      ...(filter.$and || []),
      {
        $or: [
          { visibility: "public" },
          { owner: req.user.id },
        ],
      },
    ];
  } else {
    filter.visibility = "public";
  }

  const [repositories, totalCount] = await Promise.all([
    Repository.find(filter)
      .populate("owner", "username avatarUrl")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }),

    Repository.countDocuments(filter),
  ]);

  const pagination = buildPaginationMeta(page, limit, totalCount);

  sendSuccess(res, 200, { repositories, pagination });
});
