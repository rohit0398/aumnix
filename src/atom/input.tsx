import React from "react";
import type { UseFormRegister } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface CustomInputProps<T extends Record<string, any>> extends InputProps {
  label?: string;
  name: any;
  register: UseFormRegister<T>;
  formState: any;
  validate?: any;
  rules?: any;
}

export const InputField = <T extends Record<string, any>>({
  label,
  name,
  register,
  formState,
  rules = {},
  validate = {},
  ...rest
}: CustomInputProps<T>) => {
  const error: any = formState?.errors[name] as any;
  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 block text-left text-white text-xl font-medium"
        >
          {label}
        </label>
      )}
      <input
        {...register(name, { ...rules, validate })}
        {...rest}
        className={`block min-h-[2.375rem] w-full border-b-2 px-1.5 py-1 bg-transparent ${
          error ? "border-red-500" : ""
        }`}
      />
      {rules &&
        typeof rules === "object" &&
        Object.hasOwn(rules, "required") && (
          <span className="absolute right-2 top-2 text-white">*</span>
        )}
      {error && (
        <p className="mt-2 text-left text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};
