import React from "react";
import { todoInterface } from "./Todo";

interface props {
  currentPageList: todoInterface[];
  search: string;
}
export default function TodoList(props: props) {
  return (
    <ul className="min-h-[500px]">
      {props?.currentPageList &&
        props?.currentPageList
          ?.filter((t) => {
            return props?.search?.toLowerCase() === ""
              ? t
              : t?.todo?.toLowerCase()?.includes(props?.search);
          })
          .map((todo, key) => {
            return (
              <li className="my-5 flex gap-5 items-center" key={key}>
                <input
                  className="accent-green-600 h-4 w-4 cursor-pointer "
                  type="checkbox"
                  checked={todo?.completed}
                  readOnly
                />
                <p>{todo?.todo}</p>
              </li>
            );
          })}
    </ul>
  );
}
