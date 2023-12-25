import React from "react";

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  register: any;
  checked?: boolean;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  value,
  name,
  register,
  checked,
}) => {
  return (
    <div
      className={`flex min-h-[2.375rem] items-center justify-center rounded-full border border-gray-600 px-6
      hover:border-gray-300 hover:[background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.19))] hover:[backdrop-filter:blur(200px)] hover:box-border
      ${
        checked
          ? " border-gray-300 [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.19))] [backdrop-filter:blur(200px)] box-border"
          : ""
      }`}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className="hidden"
        {...register(name)}
      />
      <label htmlFor={value} className=" cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};
