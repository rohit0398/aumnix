import React from "react";

export function CustomCheckbox({
  label,
  name,
  register,
}: {
  label?: string;
  name: string;
  register: any;
}) {
  return (
    <label className=" flex items-center px-4 py-2 rounded-3xl border border-gray-500 has-[:checked]:border-2 has-[:checked]:!border-gray-200 has-[:checked]:[background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.03),_rgba(255,_255,_255,_0.03))] has-[:checked]:[backdrop-filter:blur(200px)] hover:border-gray-300 hover:scale-105">
      <input
        type="checkbox"
        name={name}
        className=" hidden form-checkbox"
        {...register(name)}
      />
      <span className="w-full h-full text-gray cursor-pointer select-none">
        {label}
      </span>
    </label>
  );
}
