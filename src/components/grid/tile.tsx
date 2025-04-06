import clsx from "clsx";
import Image from "next/image";
import Label from "../label";


export function GridTileImage({
  isInteractive = true,
  active,
  label,
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
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex flex-col h-full w-full  overflow-hidden border bg-[#4D4D4D] hover:border-neutral-600 ",
        {
          relative: label,
          "border-2 border-neutral-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
    >
      
      {props.src ? (
        <div className="relative w-full flex-grow-0 flex-shrink-0 basis-[70%]">
        <Image
          className={clsx("h-full w-full object-contain", {
            "transition duration-300 ease-in-out group-hover:scale-105":
              isInteractive,
          })}
          {...props}
        />
        </div>
      ) : null}
      {label ? (
        <div className="w-full flex-grow-0 flex-shrink-0 basis-[30%] flex items-start justify-start">
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
         </div>
      ) : null}

    </div>
  );
}