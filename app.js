import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ItemRoutes from "./items/routes.js";
import CommentRoutes from "./comments/routes.js";
import FollowRoutes from "./follows/routes.js";
import cors from "cors";
import session from "express-session";
const CONNECTION_STRING = 'mongodb+srv://aravindv98:kanbas123@kanbas-a6.orjwinj.mongodb.net/project?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: false,
}));
app.use(express.json());
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: true,

};
if (process.env.NODE_ENV !== "production") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        httpOnly: true,
    };
} else {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: 'none',
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);


//const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/project'

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
UserRoutes(app);
ItemRoutes(app);
CommentRoutes(app);
FollowRoutes(app);
app.listen(process.env.PORT || 4000);