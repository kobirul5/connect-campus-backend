/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'; 
import { Admission } from './admission.model';


// CREATE
export const createAdmission = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { name, subject, email, phone, address, dob, image } = data;

    if (!name || !subject || !email || !phone || !address || !dob) {
       res.status(400).json({ success: false, message: 'All fields except image are required.' });
       return
    }

    const admission = await Admission.create(data)

    res.status(201).json({ success: true, data: admission });

  } catch (error) {
     res.status(500).json({ success: false, message: 'Server error while creating admission.' });
    return
  }
};

// GET Admission by Email
export const getAdmissionByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;

    if (!email) {
       res.status(400).json({ success: false, message: 'Email is required.' });
      return
    }

    const admission = await Admission.findOne({ email });

    if (!admission) {
       res.status(404).json({ success: false, message: 'Admission not found.' });
      return
    }

    res.status(200).json({ success: true, data: admission });
  } catch (error) {
     res.status(500).json({ success: false, message: 'Server error while fetching admission.' });
    return
  }
};
