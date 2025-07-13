"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionRouter = void 0;
const express_1 = __importDefault(require("express"));
const admission_contoller_1 = require("./admission.contoller");
exports.admissionRouter = express_1.default.Router();
// CREATE admission
exports.admissionRouter.post('/', admission_contoller_1.createAdmission);
// GET admission by email
exports.admissionRouter.get('/:email', admission_contoller_1.getAdmissionByEmail);
