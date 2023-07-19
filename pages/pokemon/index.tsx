import React from "react";
import Link from "next/link";
import { Modern_Antiqua } from "next/font/google";
const modern = Modern_Antiqua({weight:'400',subsets: ['latin']})
export default function Pokemon({ pokemons }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap col-span-6 gap-4 p-10">
        {pokemons?.results?.slice(0, 20)?.map((p, key) => {
          return (
            <div
              key={key}
              className="border-slate-100 shadow-md rounded-sm p-5 hover:bg-teal-400 transition delay-100 hover:text-slate-50"
            >
              <Link href={`pokemon/${key + 1}`}>
                <p className={modern.className}>
                  {key + 1}.
                  <span className="px-1 capitalize">{p?.name}</span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return { props: { pokemons: await res.json() } };
}
