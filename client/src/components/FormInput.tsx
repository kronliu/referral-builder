import React from "react";

interface FormInputProps {
  type?: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-400">
        {label.toUpperCase()}
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-500"
        required
      />
    </div>
  );
};
