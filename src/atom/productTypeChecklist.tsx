"use client";

import { productNames } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { RadioInput } from ".";

export function ProductTypeChecklist() {
    const { register, watch } = useForm<FormData>({});
    const selectedProductType = watch("productType" as any);
  
  return (
    <div className=" flex gap-10 justify-center">
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
  );
}
