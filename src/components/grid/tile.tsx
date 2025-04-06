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
        "group flex flex-col h-full w-full items-center justify-center overflow-hidden border bg-[#4D4D4D] hover:border-neutral-600 ",
        {
          relative: label,
          "border-2 border-neutral-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
    >
      
      {props.src ? (
        <div className="w-full aspect-square relative">
        <Image
          className={clsx("relative h-full w-full object-contain", {
            "transition duration-300 ease-in-out group-hover:scale-105":
              isInteractive,
          })}
          {...props}
        />
        </div>
      ) : null}
      {label ? (
        <div className="flex-1 flex items-end justify-center">
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