import * as dao from "./dao.js";
import {findUserByUsername} from "../users/dao.js";
import {findItemById} from "../items/dao.js";

function CommentRoutes(app) {
    const createComment = async (req, res) => {
        const comment = await dao.createComment(req.body.comment);
        res.json(comment);
    };
    const deleteComment = async (req, res) => {
        const status = await dao.deleteComment(req.params.commentId);
        res.json(status);
    };

    const findCommentById = async (req, res) => {
        const comment = await dao.findCommentById(req.params.commentId);
        res.json(comment);
    };
    const findCommentsByUser = async  (req, res) => {
        const user = await findUserByUsername(req.params.username);
        const comments = await  dao.findCommentsByUser(user);
        res.json(comments);
    }

    const findCommentsByItem = async  (req, res) => {
        const item = await findItemById(req.params.itemId);
        const comments = await  dao.findCommentsByItem(item);
        res.json(comments);
    }

    app.post("/api/comments", createComment);
    app.get("/api/comments/:commentId", findCommentById);
    app.get("/api/comments/username/:username", findCommentsByUser);
    app.get("/api/comments/item/:itemId", findCommentsByItem);
    app.delete("/api/comments/:commentId", deleteComment);


}
export default CommentRoutes;