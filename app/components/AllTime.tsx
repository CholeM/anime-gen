import React from "react";
import Card from "./Card";
import { getTopData } from '../services/getData';
import { Top, AnimeInfo } from "../models/anime";

const revalidation = 89500;

export default async function AllTime() {
  const info = await getTopData<Top>(
      'https://api.jikan.moe/v4/top/anime?limit=15',
      revalidation
    )

  const data = info?.data.sort((a, b) => a.rank - b.rank)
  const list = data?.slice(0, 10);

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">
          Top All Time
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {list?.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime as AnimeInfo}
            type="allTime"
          />
        ))}
      </div>
    </div>
  )
}
