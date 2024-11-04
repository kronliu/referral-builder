import axios from "axios";
import { Referral } from "../types/referral";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createReferral = async (referral: Omit<Referral, "id">) => {
  const response = await api.post<Referral>("/referrals", referral);
  return response.data;
};

export const getReferrals = async () => {
  const response = await api.get<Referral[]>("/referrals");
  return response.data;
};
