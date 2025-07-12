"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollegeById = exports.getAllColleges = exports.createCollege = void 0;
const college_model_1 = require("./college.model");
// Create a new college
const createCollege = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const savedCollege = yield college_model_1.College.create(data);
        res.status(201).json({ success: true, savedCollege });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create college", error });
    }
});
exports.createCollege = createCollege;
// Get all colleges
const getAllColleges = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colleges = yield college_model_1.College.find();
        res.status(200).json(colleges);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch colleges", error });
    }
});
exports.getAllColleges = getAllColleges;
// Get a single college by id
const getCollegeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const college = yield college_model_1.College.findById(id);
        if (!college) {
            res.status(404).json({ message: "College not found" });
            return;
        }
        res.status(200).json(college);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch college", error });
    }
});
exports.getCollegeById = getCollegeById;
