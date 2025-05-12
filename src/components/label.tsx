import clsx from "clsx";
import Price from "./price";

export default function Label({title, amount, currencyCode, position = "bottom"}:{
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}){

  return (
    <div
      className={clsx(
         "flex w-full px-4 justify-start",
        {
          "lg:px-20": position === "center", 
        }
      )}
    >
      <div className="flex flex-col text-xs font-serif  text-black w-full">
      <h3 className="mr-4 line-clamp-2 flex-grow text-[clamp(0.875rem,2vw,1.25rem)] font-bold tracking-[1.2px] text-white font-serif">
  {title}
</h3>
        <Price
          className="flex-none rounded-full  text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden src[275px]/label:inline"
        />
      </div>
    </div>
  );
}