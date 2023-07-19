import React from "react";

interface props{
    setSearch:(val:string)=>void
}
export default function SearchTodo(props:props) {

  return (
    <div className="search">
      <label htmlFor="search" className="mr-4 hidden md:inline">
        Search:
      </label>
      <input
        type="text"
        className="border-sky-400 border focus:outline-none text-black rounded-md p-1 w-auto"
        id="search"
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
        placeholder="e.g. Solve a Rubik's cube"
      />
    </div>
  );
}
