import React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Carousel from "@/Components/Carousel";

interface address {
  address: string;
  city: string;
}
export interface userInterface {
  users: {
    users: {
      id: number;
      firstName: string;
      lastName: string;
      image: string;
      address: address;
    }[];
  };
}
export default function slider({ users }: userInterface): React.ReactElement {
  return (
    <div className="container mx-auto">
      <Carousel users={users} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<userInterface> = async () => {
  const res = await fetch("https://dummyjson.com/users");
  return { props: { users: await res.json() } };
};
