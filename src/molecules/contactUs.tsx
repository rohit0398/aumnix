"use client";

import { useForm } from "react-hook-form";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { Button, CustomLink, InputField, RadioInput } from "@/atom";
import { productNames } from "@/utils/constants";

export function ContactUs() {
  const { register, handleSubmit, formState, watch } = useForm<FormData>({});
  const selectedProductType = watch("productType" as any);
  const onSubmit = async (values: FormData) => {
    // try {
    //   const feedRes = values?._id
    //     ? await api.patch(`/feed/${values?._id}`, values)
    //     : await api.post("/feed", values);
    //   toast.success("Feed create successfully");
    //   handleSetScript({ ...values, _id: feedRes?.data?._id });
    // } catch (_err) {
    //   toast.error(wentWrong);
    // }
  };

  return (
    <div>
      <form className="mt-4 space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16">
          <InputField
            label="Full Name"
            name="fullName"
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
            name="companyName"
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
            name="contactNumber"
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
            htmlFor={"productType"}
            className="mb-4 block text-left text-gray text-xl font-medium"
          >
            Which product do you like ?
          </label>

          <div className=" flex gap-10 flex-wrap">
            {productNames.map((val, ind) => (
              <RadioInput
                key={ind}
                label={val}
                name="productType"
                value={val}
                checked={selectedProductType === val}
                register={register}
              />
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor={"details"}
            className="mb-2 block text-left text-gray text-xl font-medium"
          >
            Enter Your Specific Details
          </label>
          <textarea
            {...register("details" as any)}
            rows={8}
            placeholder="Tell us about your needs"
            className=" w-full rounded-xl border-2 border-gray-600 p-5 bg-transparent"
          />
        </div>

        <div className=" flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 shrink-0">
            <div className=" flex gap-2 items-center">
              <EnvelopeIcon className="h-6 w-6 inline-block" />
              <CustomLink
                href={"mailto:hello@aumnix.co.in"}
                text={"hello@aumnix.co.in"}
                className={`text-white hover:scale-[1.05] text-xl font-medium`}
              ></CustomLink>
            </div>
            <div className=" flex gap-2 items-center">
              <PhoneIcon className="h-6 w-6 inline-block" />
              <CustomLink
                href={"tel:+91-9876543219"}
                text={"+91-9876543219"}
                className={`text-white hover:scale-[1.05] text-xl font-medium`}
              ></CustomLink>
            </div>
          </div>
          <div>
            <Button title="Send Enquiry" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
