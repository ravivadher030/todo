import React, { useState } from "react";
import { user } from "./Card";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
interface users {
  user: user;
}
export default function CardDetail({ user }: users) {
  const [address, setAddress] = useState(false);
  return (
    <div className="w-100 transition-shadow bg-white text-black p-10 rounded-sm shadow-md">
      <div className="flex gap-10 items-center">
        <div className="h-100 w-100 overflow-hidden rounded-full shadow-md ">
          <Image
            src={user?.image}
            height={100}
            width={100}
            alt="User_Profile"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <h1 className="text-lg">{user?.firstName}</h1>
          <p>{user?.lastName}</p>
          <div className="group relative flex items-center active:scale-105 my-6 w-fit before:justify-start  hover:before:bg-sky-300  hover:before:w-56 before:rounded-full transition-all delay-1000 before:block  before:absolute before:h-10 before:w-10 before:transition-all before:delay-200 before:bg-sky-200">
            <button
              className="m-auto p-1 rounded relative z-20 ml-[7px]"
              onClick={() => {
                setAddress(!address);
              }}
            >
              <BsFillArrowRightCircleFill className="group-hover:text-white group-hover:ml-auto transition-all delay-200 z-20 text-lg cursor-pointer" />
            </button>
          </div>
        </div>
        <div className={`${address?"":"hidden"} self-start`}>
            <h2>Address:</h2>
            <p>{user?.address?.address+', '+user?.address?.city}</p>
        </div>
      </div>
    </div>
  );
}
