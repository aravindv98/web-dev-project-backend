import userModel from "../users/model.js";
import itemModel from "./model.js";
import commentModel from "./model.js";
export const createComment = (comment) => commentModel.create(comment);
export const findCommentById = (commentId) => commentModel.findById(commentId);

export const findCommentsByUser = (user) => commentModel.find({ poster: user });

export const findCommentsByItem = (item) => commentModel.find({item: item});
export const deleteComment = (commentId) => commentModel.deleteOne({ _id: commentId });