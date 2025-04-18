import clsx from "clsx";
import React from "react";

export default function Grid(props: React.ComponentProps<"ul">){
  return(
    <ul {...props} className={clsx("grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<"li">){
  return(
    <li {...props} className={clsx("aspect-[4/5] transition-opacity", props.className)}
    >
      {props.children}
    </li>
  )
}

Grid.Item = GridItem;