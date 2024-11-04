import React from "react";
import { Referral } from "../types/referral";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
interface ReferralTableProps {
  referrals: Referral[];
  onEdit: () => void;
  onDelete: () => void;
}

export const ReferralTable: React.FC<ReferralTableProps> = ({
  referrals,
  onEdit,
  onDelete,
}) => {
  const rowsToDisplay = 15;

  const displayedReferrals = [
    ...referrals,
    ...Array(rowsToDisplay - referrals.length).fill({} as Referral),
  ].slice(0, rowsToDisplay);
  return (
    <div className="min-h-screen  bg-gray-100 p-2 sm:p-16 ">
      <div className="min-w-screen overflow-x-auto bg-white p-8 rounded-md">
        <table className="min-w-full">
          <thead>
            <tr className="bg-white">
              <th className="py-2 px-4 border-b text-left font-semibold text-gray-400">
                GIVEN NAME
              </th>
              <th className="py-2 px-4 border-b text-left font-semibold text-gray-400">
                SURNAME
              </th>
              <th className="py-2 px-4 border-b text-left font-semibold text-gray-400">
                EMAIL
              </th>
              <th className="py-2 px-4 border-b text-left font-semibold text-gray-400">
                PHONE
              </th>
              <th className="py-2 px-4 border-b text-center font-semibold text-gray-400">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedReferrals.map((referral, index) => (
              <tr
                key={`referral.id-${index}`}
                className={referral.id ? "h-10 hover:bg-gray-50" : "h-10"}
              >
                <td className="py-2 px-4 border-b text-gray-400">
                  {referral.givenName}
                </td>
                <td className="py-2 px-4 border-b text-gray-400">
                  {referral.surname}
                </td>
                <td className="py-2 px-4 border-b text-gray-400">
                  {referral.email}
                </td>
                <td className="py-2 px-4 border-b text-gray-400">
                  {referral.phone}
                </td>
                <td className="py-2 px-4 border-b text-center space-x-2">
                  {referral.id && (
                    <>
                      <button onClick={onEdit}>
                        <PencilIcon className="w-5 h-5 text-gray-400 inline" />
                      </button>
                      <button onClick={onDelete}>
                        <TrashIcon className="w-5 h-5 text-gray-400 inline" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
