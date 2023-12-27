"use client";

import { productNames } from "@/utils/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from ".";

export function ProductTypeChecklist() {
  const { push } = useRouter();
  const search = useSearchParams();
  return (
    <div className=" flex gap-x-10 gap-y-6 justify-center flex-wrap">
      {productNames.map((val, ind) => (
        <Button
          onClick={() =>
            push(
              `products?type=${val?.toLocaleLowerCase().replaceAll(" ", "_")}`
            )
          }
          key={ind}
          title={val}
          variant="out-lined-selected"
          className={
            val?.toLocaleLowerCase().replaceAll(" ", "_") === search.get("type")
              ? `background-gradient-multi`
              : ` [background:linear-gradient(90.3deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.19))] [backdrop-filter:blur(200px)]`
          }
        />
      ))}
    </div>
  );
}
