import React, { useState } from "react";

interface props {
  setCompleted: (val: boolean) => void;
}

export default function Filter(props: props) {
  const [filter, setFilter] = useState(true);
  const handleFilter=(val:boolean):void=>{
    setFilter(val)
    props.setCompleted(val)
  }
  return (
    <div className="flex gap-5"> 
      <button
        className={`${
          filter ? "bg-green-500 text-white" : ""
        } transition-all delay-75 hover:bg-green-500 hover:text-white border-green-500 border py-2 px-5 rounded-md shadow-md"`}
        value="completed"
        onClick={() => handleFilter(true)}
      >
        Completed
      </button>
      <button
        className={`${
          !filter ? "bg-red-500 text-white" : ""
        } transition-all delay-75 hover:bg-red-500 hover:text-white border-red-500 border py-2 px-5 rounded-md shadow-md`}
        value="uncompleted"
        onClick={() => handleFilter(false)}
      >
        UnCompleted
      </button>
    </div>
  );
}
