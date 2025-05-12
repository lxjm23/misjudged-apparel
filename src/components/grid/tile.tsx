import clsx from "clsx";
import Image from "next/image";
import Label from "../label";
import VariantSelectorInline from "../product/variant-selector-inline";
import { ProductOption, ProductVariant } from "@/lib/shopify/types";


export function GridTileImage({
  isInteractive = true,
  active,
  label,
  options,
  variants,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
  options?: ProductOption[];
  variants?: ProductVariant[];
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex flex-col h-full w-full  overflow-hidden border bg-[#4D4D4D] hover:border-neutral-600 ",
        {
          relative: label,
          "border-2 border-neutral-600": active,
          "border-neutral-800": !active,
        }
      )}
    >
      {props.src ? (
        <div className="relative w-full flex-grow-0 flex-shrink-0 aspect-[1/1]">
          <Image
  className={clsx("object-cover", {
    "transition duration-300 ease-in-out group-hover:scale-105": isInteractive,
  })}
  {...props}
/>
        </div>
      ) : null}

      {label ? (
        <div className="w-full flex-grow-0 flex-shrink-0 basis-[30%] mt-4 flex flex-col justify-start">
          <Label
            title={label.title}
            amount={label.amount}
            currencyCode={label.currencyCode}
            position={label.position}
          />

          {options && variants && (
            <div className="mt-2 px-2 pb-2">
              <VariantSelectorInline options={options} variants={variants} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}