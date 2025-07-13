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
exports.getAdmissionByEmail = exports.createAdmission = void 0;
const admission_model_1 = require("./admission.model");
// CREATE
const createAdmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { name, subject, email, phone, address, dob, image } = data;
        if (!name || !subject || !email || !phone || !address || !dob) {
            res.status(400).json({ success: false, message: 'All fields except image are required.' });
            return;
        }
        const admission = yield admission_model_1.Admission.create(data);
        res.status(201).json({ success: true, data: admission });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error while creating admission.' });
        return;
    }
});
exports.createAdmission = createAdmission;
// GET Admission by Email
const getAdmissionByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        if (!email) {
            res.status(400).json({ success: false, message: 'Email is required.' });
            return;
        }
        const admission = yield admission_model_1.Admission.findOne({ email });
        if (!admission) {
            res.status(404).json({ success: false, message: 'Admission not found.' });
            return;
        }
        res.status(200).json({ success: true, data: admission });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error while fetching admission.' });
        return;
    }
});
exports.getAdmissionByEmail = getAdmissionByEmail;
