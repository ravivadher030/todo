import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
interface props {
  setPrev: () => void;
  setNext: () => void;
  handlePage: (val: number) => void;
  currentPage: number;
  totalPage: number[];
}
export default function Pegination(props: props) {
  return (
    <div className="flex justify-between gap-12 ">
      <button onClick={props?.setPrev} className={`${props?.currentPage > 1 ? "" : "invisible"} group relative`}>
        <BsFillArrowLeftCircleFill className="h-7 w-7 text-sky-300" />
        <span className="hidden md:inline opacity-0 text-sm absolute bg-sky-200 borde p-1 px-5 w-32 left-0 top-8 text-slate-700 group-hover:opacity-100  transition-opacity delay-500">Previous Page</span>
      </button>
      <ul className="flex gap-3  items-center">
        {props?.totalPage?.length > 1
          ? props?.totalPage?.map((p, key) => {
              return (
                <li key={key}
                  className={`${
                    p === props?.currentPage ? "bg-sky-400 text-white " : ""
                  }h-7 w-7 text-center cursor-pointer `}
                  onClick={() => {
                    props?.handlePage(p);
                  }}
                >
                  {p}
                </li>
              );
            })
          : ""}
      </ul>
      <button onClick={props?.setNext} className={`${props?.currentPage < props?.totalPage?.length ? "" : "invisible"} group relative`}>
        <BsFillArrowRightCircleFill className="h-7 w-7 text-sky-300" />
        <span className="hidden md:inline w-32 opacity-0 text-sm absolute bg-sky-200 borde p-1 px-5 left-0 top-8 text-slate-700 group-hover:opacity-100 transition-opacity delay-500">Next Page</span>
      </button>
    </div>
  );
}
