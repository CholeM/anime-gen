import React from "react";
import { AnimeInfo } from '../models/anime';

export default function Synopsis({ anime }: {anime: AnimeInfo }) {

  return (
    <div className="my-4">
      <h2 className="text-2xl mb-1">Synopsis</h2>
      <p className="text-base">
        {anime.synopsis}
      </p>
    </div>
  )
}