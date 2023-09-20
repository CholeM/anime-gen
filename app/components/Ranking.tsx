import React, { useEffect } from "react";
import { getAllTime, getAiring } from "@/app/api/ranking/getRanking";
import Card from "./Card";
import { Ranking } from "../models/ranking";

type RankingProps = {
  type: string;
  title: string;
};

export default async function Ranking({ type, title }: RankingProps) {
  let list: any[];
  if (type === "airing") {
    list = await getAiring();
  } else {
    list = await getAllTime();
  }

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {...list.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime as Ranking}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}
