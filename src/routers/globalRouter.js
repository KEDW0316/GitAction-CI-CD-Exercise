import express from "express";
import { trending, login } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/login", login);

export default globalRouter;
