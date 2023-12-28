"use client";

import { useForm } from "react-hook-form";

import { Button, InputField, SocialLinks } from "@/atom";
import { productNames } from "@/utils/constants";
import api from "@/utils/api";
import { useState } from "react";
import { CustomCheckbox } from "@/atom";

import { toast } from "react-toastify";

export function ContactUs() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<any>({
    defaultValues: {
      product_list: { ai_homes: true },
    },
  });

  const onSubmit = async (values: any) => {
    const product_list = Object.entries(values?.product_list)
      .map(([key, value]: any) => {
        return value ? key : undefined;
      })
      .filter((val) => val);
    values.product_list = product_list;

    setLoading(true);
    api
      .post("/submit_enquiry", values)
      .then(() => {
        toast.success(
          "Enquiry send successfully. Our team will contact you soon."
        );
        reset({
          full_name: "",
          company_name: "",
          email: "",
          contact_number: "",
          product_list: { ai_homes: true },
          enquiry_details: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong! Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <form className="mt-4 space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16">
          <InputField
            label="Full Name"
            name="full_name"
            type="text"
            placeholder="John Smith"
            register={register}
            formState={formState}
            rules={{
              required: "This is a required field.",
            }}
          />
          <InputField
            label="Company Name"
            name="company_name"
            type="text"
            placeholder="Aumnix private limited"
            register={register}
            formState={formState}
          />

          <InputField
            label="E-mail"
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            register={register}
            formState={formState}
            rules={{
              required: "This is a required field.",
            }}
          />

          <InputField
            label="Contact Number"
            name="contact_number"
            type="text"
            placeholder="9876543210"
            register={register}
            formState={formState}
            rules={{
              required: "This is a required field.",
            }}
          />
        </div>

        <div>
          <label
            htmlFor={"product_list"}
            className="mb-4 block text-left text-gray text-xl font-medium"
          >
            Which product do you like ?
          </label>

          <div className=" flex gap-10 flex-wrap">
            {productNames.map((val, ind) => (
              <CustomCheckbox
                key={ind}
                label={val}
                name={`product_list[${val
                  ?.toLocaleLowerCase()
                  ?.replaceAll(" ", "_")}]`}
                register={register}
              />
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor={"enquiry_details"}
            className="mb-2 block text-left text-gray text-xl font-medium"
          >
            Enter Your Specific Details
          </label>
          <textarea
            {...register("enquiry_details" as any)}
            rows={8}
            placeholder="Tell us about your needs"
            className=" w-full rounded-xl border-2 border-gray-600 p-5 bg-transparent"
          />
        </div>

        <div className=" flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 shrink-0">
            <SocialLinks />
          </div>
          <div>
            <Button title="Send Enquiry" type="submit" disabled={loading} />
          </div>
        </div>
      </form>
    </div>
  );
}
