

import { FilterItem } from "./item";
import FilterItemDropDown from "./dropdown";
import { SortFilterItem } from "@/lib/constant";

export type PathFilterItem = { title: string; path: string };
export type ListItem = SortFilterItem | PathFilterItem;

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden text-xs text-black md:block ">
            {title}
          </h3>
        ) : null}
        <ul className="hidden text-black md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropDown list={list} />
        </ul>
      </nav>
    </>
  );
}