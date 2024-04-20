import userModel from "./model.js";
import itemModel from "../items/model.js";
export const createUser = (user) => userModel.create(user);
export const findAllUsers = () => userModel.find();
export const findUserById = (userId) => userModel.findById(userId);
export const findUserByUsername = (username) =>
    userModel.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
    userModel.findOne({ username, password });
export const updateUser = (userId, user) =>
    userModel.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => userModel.deleteOne({ _id: userId });
export const addItemToCart = async (username, itemId) => {
    try {
        // Find the user by their ID
        const user = await userModel.findOne({ username: username });

        // If the user is not found, handle it appropriately
        if (!user) {
            throw new Error('User not found');
        }

        // Find the item by its ID
        const item = await itemModel.findById(itemId);

        // If the item is not found, handle it appropriately
        if (!item) {
            throw new Error('Item not found');
        }

        // Add the item to the user's cart
        user.cart.push(item);

        // Save the updated user document
        await user.save();

        // Return the updated user with the added item to the cart
        return user;
    } catch (error) {
        // Handle errors (e.g., user not found, item not found, etc.)
        console.error('Error adding item to cart:', error);
        throw error;
    }
};
export const removeItemFromCart = async (username, itemId) => {
    try {
        // Find the user by their username
        const user = await userModel.findOne({ username });

        // If the user is not found, handle it appropriately
        if (!user) {
            throw new Error('User not found');
        }

        // Find the index of the item in the cart array
        const itemIndex = user.cart.findIndex((cartItem) => cartItem.equals(itemId));

        // If the item is not in the cart, handle it appropriately
        if (itemIndex === -1) {
            throw new Error('Item not found in the cart');
        }

        // Remove the item from the user's cart
        user.cart.splice(itemIndex, 1);

        // Save the updated user document
        await user.save();

        // Return the updated user without the removed item in the cart
        return user;
    } catch (error) {
        // Handle errors (e.g., user not found, item not found in the cart, etc.)
        console.error('Error removing item from cart:', error);
        throw error;
    }
};