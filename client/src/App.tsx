import { useEffect, useState } from "react";
import { ReferralForm } from "./components/ReferralForm";
import { ReferralTable } from "./components/ReferralTable";
import { Referral } from "./types/referral";
import { createReferral, getReferrals } from "./services/api";

const initialFormState: Omit<Referral, "id"> = {
  givenName: "",
  surname: "",
  email: "",
  phone: "",
  homeName: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  country: "",
};

export const App = () => {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Referral>(initialFormState);
  const fetchReferrals = async () => {
    try {
      const response = await getReferrals();
      setReferrals(response);
    } catch (error) {
      console.error("Error fetching referrals:", error);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, [createLoading]);

  const handleCreateReferral = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setCreateLoading(true);
      await createReferral(formData);
      setFormData(initialFormState);
    } catch (error) {
      console.log("Error saving referral:", error);
    } finally {
      setCreateLoading(false);
    }
  };

  const handleEditRefferal = () => {
    console.log("Not part of the requirements");
  };

  const handleDeleteRefferal = () => {
    console.log("Not part of the requirements");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <div className="flex-auto md:w-1 mb-4 md:mb-0 md:mr-4">
        <ReferralForm
          onSubmit={handleCreateReferral}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <div className="flex-auto md:w-1">
        <ReferralTable
          referrals={referrals}
          onEdit={handleEditRefferal}
          onDelete={handleDeleteRefferal}
        />
      </div>
    </div>
  );
};
