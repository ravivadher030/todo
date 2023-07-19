import Image from "next/image";
import React, { useState } from "react";

interface address {
  address: string;
  city: string;
}
export interface user {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: address;
}
interface props {
  user: user;
  currentUser: (id: number | undefined) => void;
}
const Card: React.FC<props> = (props) => {
  const { user, currentUser } = props;
  const [currentuserId, setUserId] = useState<number | undefined>(0);
  const setcurrentUser = (userid: number): void => {
    currentuserId === userid ? currentUser(undefined) : currentUser(userid);
    currentuserId === userid
      ? setUserId(undefined)
      : setUserId((prev) => (prev = userid));
  };
  return (
    <div className="bg-slate-300  m-4 p-10 rounded-md shadow-lg flex flex-col items-center relative">
      <div className="rounded-full bg-white h-[100px] w-[100px]  overflow-hidden">
        <Image
          src={user?.image}
          height={200}
          width={200}
          alt="User_Profile"
          className="object-cover"
          priority
        />
      </div>
      <div className="my-3">
        <button
          className={`${
            currentuserId === user?.id ? "bg-sky-400" : ""
          } hover:bg-sky-400 border cursor-pointer rounded-sm border-sky-400 py-1 px-2 text-sm text-black font-semibold`}
          onClick={() => {
            setcurrentUser(user?.id);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
