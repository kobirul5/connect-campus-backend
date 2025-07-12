import express from "express";
import { getUserByEmail } from "./user.controller";

export const userRouter = express.Router();

userRouter.get("/:email", getUserByEmail);


