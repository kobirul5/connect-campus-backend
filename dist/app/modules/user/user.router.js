"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/:email", user_controller_1.getUserByEmail);
exports.userRouter.post("/", user_controller_1.createUser);
exports.userRouter.put("/:email", user_controller_1.updateUser);
