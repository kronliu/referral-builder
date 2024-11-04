import { Request, Response } from "express";
import { Referral } from "../models/referral";
import { v4 as uuidv4 } from "uuid";

const referrals: Referral[] = [];

export const getReferrals = (req: Request, res: Response) => {
  res.json(referrals);
};

export const createReferral = (req: Request, res: Response) => {
  const referral: Omit<Referral, "id"> = req.body;
  const newReferral: Referral = { id: uuidv4(), ...referral };
  referrals.push(newReferral);
  res.status(201).json(newReferral);
};
