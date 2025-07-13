"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./app/modules/user/user.router");
const cors_1 = __importDefault(require("cors"));
const college_router_1 = require("./app/modules/university/college.router");
const admission_router_1 = require("./app/modules/admission/admission.router");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    origin: [
        'http://localhost:3000',
        'https://connect-campus-five.vercel.app'
    ],
    credentials: true
}));
exports.app.use(express_1.default.json());
// routes
exports.app.use('/api/user', user_router_1.userRouter);
exports.app.use('/api/collage', college_router_1.collageRouter);
exports.app.use('/api/admission', admission_router_1.admissionRouter);
exports.app.get('/', (req, res) => {
    res.status(200).json({
        massage: "Welcome to tour connect campus backend"
    });
});
