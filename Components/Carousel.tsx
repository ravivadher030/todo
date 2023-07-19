import { userInterface } from "@/pages/slider";
import React, { useState } from "react";
import Card from "./Card";
import { Amaranth } from "next/font/google";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const amaranth =Amaranth({weight:"400",subsets:['latin']})
import CardDetail from "./CardDetail";
export default function Carousel({ users }: userInterface) {
  const nextSlide = (): void => {
    const scroll = document.getElementById("scroll");
    scroll != undefined || scroll != null ? (scroll.scrollLeft -= 200) : "";
  };
  const prevSlide = (): void => {
    const scroll = document.getElementById("scroll");
    scroll != undefined || scroll != null ? (scroll.scrollLeft += 200) : "";
  };
  const [userId, setUserId] = useState<number | undefined>();
  const setCurrentUser = (id: number | undefined) => {
    setUserId(id);
  };
  return (
    <div className={`${amaranth.className} p-10`}>
      <h1 className="text-xl font-semibold">Slider</h1>
      <div className="my-10 relative">
        <BsFillArrowLeftCircleFill
          className="text-2xl absolute top-40 z-10 text-sky-400 cursor-pointer"
          onClick={nextSlide}
        />
        <BsFillArrowRightCircleFill
          className="text-2xl absolute top-40 right-0 z-10 text-sky-400 cursor-pointer"
          onClick={prevSlide}
        />
        <div
          id="scroll"
          className="shadow-lg scroll-smooth no-scrollbar rounded-sm p-5 flex overflow-x-auto justify-start items-center bg-white relative"
        >
          {users?.users?.map((user, key) => (
            <div>
              <Card user={user} key={key} currentUser={setCurrentUser} />
            </div>
          ))}
        </div>
      </div>
      {users?.users
        ?.filter((users) => {
          return users?.id === userId;
        })
        .map((user) => {
          return <CardDetail user={user} />;
        })}
    </div>
  );
}
