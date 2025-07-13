import express from 'express';
import { createAdmission, getAdmissionByEmail } from './admission.contoller';

export const admissionRouter = express.Router();

// CREATE admission
admissionRouter.post('/', createAdmission);

// GET admission by email
admissionRouter.get('/:email', getAdmissionByEmail);

