import React from "react";

import { Referral } from "../types/referral";
import { FormInput } from "./FormInput";

interface ReferralFormProps {
  onSubmit: (e: React.FormEvent) => void;
  formData: Referral;
  setFormData: React.Dispatch<React.SetStateAction<Referral>>;
}

export const ReferralForm: React.FC<ReferralFormProps> = ({
  onSubmit,
  formData,
  setFormData,
}) => {
  console.log(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    onSubmit(e);
  };

  return (
    <div className="min-h-screen mx-auto p-16">
      <h1 className="text-3xl font-bold mb-6">Referral Builder</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-sm font-bold text-gray-400">PERSONAL DETAILS</h2>
        <hr className="h-px bg-gray-200 border-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="given name"
            name="givenName"
            value={formData.givenName}
            onChange={handleChange}
          />
          <FormInput
            label="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            type="number"
            label="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <h2 className="text-sm font-bold text-gray-400">ADDRESS</h2>
        <hr className="h-px bg-gray-200 border-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="HOME NAME OR #"
            name="homeName"
            value={formData.homeName}
            onChange={handleChange}
          />
          <FormInput
            label="street"
            name="street"
            value={formData.homeName}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
          />
          <FormInput
            label="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
          />
          <FormInput
            label="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-8">
          <button
            type="button"
            className="w-full bg-white text-gray-400 font-bold p-4 rounded-md hover:bg-gray-600 hover:text-white transition duration-200 border border-gray-300 drop-shadow-md"
          >
            UPLOAD AVATAR
          </button>
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-bold p-4 rounded-md hover:bg-blue-600 transition duration-200 drop-shadow-md"
          >
            CREATE REFERRAL
          </button>
        </div>
      </form>
    </div>
  );
};
