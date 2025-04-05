"use client";
import { CartItem } from "@/lib/shopify/types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { removeItem } from "./actions";
import { useActionState } from "react";

// ✅ Added: Explicitly define UpdateType instead of unknown
type UpdateType = "plus" | "minus" | "delete";

// ✅ Added: Define proper props type instead of inline object with `unknown`
type DeleteItemButtonProps = {
  item: CartItem;
  optimisticUpdate: (merchandiseId: string, updateType: UpdateType) => void;
};


export function DeleteItemButton({
  item,
  optimisticUpdate,
}: DeleteItemButtonProps) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const actionWithVariant = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, "delete");
        await actionWithVariant();
      }}
    >
      <button
        type="submit"
        aria-label="Remove cart item"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
      >
        <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}