import React from "react"
import Link from "next/link";
import { AnimeInfo } from "../models/anime";
import { Recommendation } from "../models/anime";

export default function CardRec({ anime }: { anime: Recommendation }) {

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <Link href={`/anime/${anime.entry.mal_id}`}>
        <div className="rounded-lg">
          <div className="relative rounded-lg">
            <img
              src={anime.entry.images.jpg.image_url}
              className="h-60 object-cover rounded-xl"
              alt={`${anime.entry.title} image`}
            />
          </div>

          <div className="mt-2">
            <h2
              className="text-base md:text-lg font-semibold text-slate-500 dark:text-slate-100"
            >
              {anime.entry.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}