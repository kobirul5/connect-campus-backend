import express from "express";
import { createUser, getUserByEmail } from "./user.controller";

export const userRouter = express.Router();

userRouter.get("/:email", getUserByEmail);
userRouter.post("/", createUser);


