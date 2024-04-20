import * as dao from "./dao.js";
import {findUserByUsername} from "../users/dao.js";


function FollowRoutes(app) {
    const follow = async (req, res) => {
        const from = await findUserByUsername(req.params.from);
        const to = await findUserByUsername(req.params.to);
        const result = await dao.follow(from, to);
        res.json(result);
    };
    const unfollow = async (req, res) => {
        const from = await findUserByUsername(req.params.from);
        const to = await findUserByUsername(req.params.to);
        const result = await dao.unfollow(from, to);
        res.json(result);
    };

    const findFollowings = async (req, res) => {
        const user = await findUserByUsername(req.params.username);
        const followings = await dao.findFollowings(user);
        res.json(followings);
    }

    const findFollowers = async (req, res) => {
        const user = await findUserByUsername(req.params.username);
        const followers = await dao.findFollowers(user);
        res.json(followers);
    }

    app.post("/api/follows/:from/:to", follow);
    app.delete("/api/follows/:from/:to", unfollow);
    app.get("/api/follows/followings/:username", findFollowings);
    app.get("/api/follows/followers/:username", findFollowers);

}
export default FollowRoutes;