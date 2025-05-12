"use client";

import { ProductOption, ProductVariant } from "@/lib/shopify/types";
import clsx from "clsx";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export default function VariantSelectorInline({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  if (!options.length || (options.length === 1 && options[0].name === "Title" && options[0].values.length === 1 && options[0].values[0] === "Default Title")) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (acc, opt) => ({
        ...acc,
        [opt.name.toLowerCase()]: opt.value,
      }),
      {}
    ),
  }));

  return options.map((option) => (
    <div key={option.id} className="font-serif ml-1 sm:ml-2">
      <div className="text-[10px] sm:text-xs uppercase tracking-wide mb-1">
        {option.name}
      </div>
      <div className="flex gap-1 sm:gap-2 flex-wrap">
        {option.values.map((value) => {
          const optionName = option.name.toLowerCase();
          const isAvailable = combinations.some(
            (c) => c[optionName] === value && c.availableForSale
          );

          return (
            <span
              key={value}
              className={clsx(
                "text-[10px] sm:text-xs px-1.5 sm:px-2 py-1 border rounded",
                isAvailable
                  ? "text-white border-gray-300"
                  : "text-gray-400 border-gray-200 line-through"
              )}
              title={`${option.name} ${value}${!isAvailable ? " (Out of Stock)" : ""}`}
            >
              {value}
            </span>
          );
        })}
      </div>
    </div>
  ));
} 
