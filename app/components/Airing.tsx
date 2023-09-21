import React from "react";
import Card from "./Card";
import { getData } from '../services/getData';
import { Airing, AnimeInfo } from "../models/anime";

const revalidation = 89500;

export default async function Airing() {
  const list = await getData<Airing>(
      'https://api.jikan.moe/v4/top/anime?filter=airing&limit=10',
      revalidation
    )

  return (
    <div className="container mx-auto px-4 pb-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">
          Top Airing
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {list?.data?.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime as AnimeInfo}
            type="airing"
          />
        ))}
      </div>
    </div>
  )
}
