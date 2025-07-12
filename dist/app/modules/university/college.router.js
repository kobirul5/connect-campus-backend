"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collageRouter = void 0;
const express_1 = __importDefault(require("express"));
const college_controller_1 = require("./college.controller");
exports.collageRouter = express_1.default.Router();
exports.collageRouter.post("/", college_controller_1.createCollege);
exports.collageRouter.get("/", college_controller_1.getAllColleges);
exports.collageRouter.get("/:id", college_controller_1.getCollegeById);
