import React from "react";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";

interface props {
  sortList: (val: string) => void;
}
export default function SortTodo(props: props) {
  return (
    <div className="sort items flex gap-5 text-xl text-sky-400">
      <button className="group relative">
        <BsSortAlphaDown
          onClick={() => {
            props?.sortList("Ascending");
          }}
        />
        <span className="hidden md:inline opacity-0 text-sm absolute bg-sky-200 borde p-1 px-5 left-0 top-6 text-slate-700 group-hover:opacity-100 transition-opacity delay-500">Ascending</span>
      </button>
      <button className="group relative">
        <BsSortAlphaUpAlt
          onClick={() => {
            props?.sortList("Decending");
          }}
        />
        <span className="hidden md:inline opacity-0 text-sm absolute bg-sky-200 borde p-1 px-5 left-0 top-6 text-slate-700 group-hover:opacity-100 transition-opacity delay-500">Descending</span>
      </button>
    </div>
  );
}
