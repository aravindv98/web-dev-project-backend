import followModel from "./model.js";
import commentModel from "../comments/model.js";
export const follow = async (fromUserId, toUserId) => {
    try {
        // Create a new follow document
        const newFollow = new followModel({
            from: fromUserId,
            to: toUserId,
        });

        // Save the follow document to the database
        const result = await newFollow.save();

        return result;
    } catch (error) {
        // Handle errors
        console.error("Error in follow function:", error);
        throw error;
    }
};


export const unfollow = async (fromUserId, toUserId) => {
    try {
        // Find and remove the follow document
        const result = await followModel.findOneAndDelete({
            from: fromUserId,
            to: toUserId,
        });

        return result;
    } catch (error) {
        // Handle errors
        console.error("Error in unfollow function:", error);
        throw error;
    }
};


export const findFollowings = (user) => followModel.find({ from: user});
export const findFollowers = (user) => followModel.find({ to: user});

