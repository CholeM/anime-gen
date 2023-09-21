import React from "react"
import Link from "next/link";
import { AnimeInfo } from "../models/anime";

type CardProps = {
  anime: AnimeInfo;
  type: string;
}
export default function Card({ anime, type }:  CardProps) {

  return (
    <div className="relative mx-auto w-full max-w-sm mb-2">
      <Link href={`/anime/${anime.mal_id}`}>
        <div className="rounded-lg">
          <div className="relative rounded-lg">
            <img
              src={anime.images.jpg.image_url}
              className="h-60 object-cover rounded-xl"
              alt={`${anime.title} image`}
            />
          </div>

          {type === "airing" ? (
            <></>
          ) : (
            <div className={`bg-blue-500 h-10 w-10 absolute left-0 top-0 ml-1 mt-1 select-none rounded-full flex overflow-hidden z-6 pt-1.5 justify-center text-base`}>
              <span className="text-white font-bold">
                {`#${anime.rank}`}
              </span>
            </div>
          )}

          <div className="mt-2">
            <h2
              className="text-sm font-semibold text-slate-500 dark:text-slate-100"
            >
              {anime.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}