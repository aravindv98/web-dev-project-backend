import * as dao from "./dao.js";
import {addItemToCart, findUserByUsername, removeItemFromCart} from "../users/dao.js";
// let currentUser = null;
function ItemRoutes(app) {
    const createItem = async (req, res) => {
        //console.log(req.body);
       // const user = await findUserByUsername(req.body.username);
        const item = await dao.createItem(req.body);
        res.json(item);
    };
    const deleteItem = async (req, res) => {
        const status = await dao.deleteItem(req.params.itemId);
        res.json(status);

    };
    const findAllItems = async (req, res) => {
        const items = await dao.findAllItems();
        res.json(items);
    };
    const findItemById = async (req, res) => {
        const item = await dao.findItemById(req.params.itemId);
        res.json(item);

    };
    const findItemByUser = async  (req, res) => {

        const user = await findUserByUsername(req.params.username);

        const items = await dao.findItemByUser(user);


        res.json(items);

    }
    const updateItem = async (req, res) => {
        const { itemId } = req.params;
        console.log(itemId);
        const status = await dao.updateItem(itemId, req.body);
        res.json(status);
    };

    const addToCart = async (req, res) => {
        //const user = await findUserByUsername(req.params.username);
        //const item = await  dao.findItemById(req.params.itemId);
        const user = await addItemToCart(req.params.username, req.params.itemId);
        res.json(user);
    }

    const removeFromCart = async (req, res) => {
        const { username, itemId } = req.params;

        try {
            // Call the function to remove the item from the user's cart
            const updatedUser = await removeItemFromCart(username, itemId);

            // Send a response with the updated user (without the removed item)
            res.json(updatedUser);
        } catch (error) {
            // Handle errors
            console.error('Error removing item from cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    app.post("/api/items", createItem);
    app.get("/api/items", findAllItems);
    app.get("/api/items/:itemId", findItemById);
    app.get("/api/items/username/:username", findItemByUser);
    app.put("/api/items/:itemId", updateItem);
    app.delete("/api/items/:itemId", deleteItem);
    app.post("/api/users/:username/cart/:itemId", addToCart);
    app.delete("/api/users/:username/cart/:itemId", removeFromCart);


}
export default ItemRoutes;