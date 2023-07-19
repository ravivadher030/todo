import Image from "next/image";
import React from "react";
import { Modern_Antiqua } from "next/font/google";
const modern = Modern_Antiqua({weight:'400',subsets: ['latin']})
export default function Pok({pokemon}) {
  return <div className="container mx-auto ">
    <div className="flex flex-wrap columns-4 justify-center p-10">
      <div className="border-slate-100 rounded-md shadow-lg flex flex-col p-5 bg-slate-300">
        <div className="image">
          <Image src={pokemon?.sprites?.other?.dream_world?.front_default} alt="Pokemon" height={300} width={300}/>
        </div>
        <div className={`${modern.className} py-5`}>
          <h1 className="font-bold my-5 text-[18px]">Abilities:</h1>
          <ul>
          {pokemon?.abilities?.map(a=>{
            return( 
              <li className={modern.className}>{a?.ability?.name}</li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  </div>;
}

export async function getStaticPaths() {
  const paths= [{ params: { id: '1' } }, { params: { id: '2' } }]
  return {paths , fallback: true };
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id}`);
  return {props:{ pokemon: await res.json() }};
}
