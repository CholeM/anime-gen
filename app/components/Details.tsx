import React from "react";
import { AnimeInfo } from '../models/anime';
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Details({ anime }: { anime: AnimeInfo }) {
  let style = (anime.status === 'Finished Airing') ? "bg-blue-500 text-white" :
    (anime.status === 'Not yet aired') ? "bg-yellow-500 text-white" : "bg-green-500 text-white"

  return (
    <div>
      <div className="flex flex-wrap sm:flex-nowrap items-center space-x-2 leading-8">
        <span className="font-semibold text-3xl">{anime.title}</span>
        <div className={`${style} px-2 rounded-lg flex justify-center`}>
          <span className="font-semibold text-sm whitespace-nowrap max-w-full flex-initial">{anime.status}</span>
        </div>
        <span className="flex items-center">{anime.score}{' '}<StarFilledIcon className="text-yellow-500"/></span>
      </div>
      <span className="text-gray-500 dark:text-slate-50 italic font-base">
        {!anime.title_english ? (
          anime.title
        ): (
          anime.title_english
        )}
      </span>

      <div className="text-gray-700 dark:text-white mt-5 text-base">
        <div className="flex flex-row sm:gap-5 flex-wrap sm:flex-nowrap">
          <div>
          <div>
              <span className="font-semibold">Type: </span>{anime.type}
            </div>
            <div>
              <span className="font-semibold">Source: </span>{anime.source}
            </div>
            <div>
              <span className="font-semibold">Episodes: </span>{anime.episodes}
            </div>
            <div>
              <span className="font-semibold">Season: </span>
              {`${anime.season[0].toUpperCase()}${anime.season.slice(1)} ${anime.year}`}
            </div>
            <div>
              <span className="font-semibold">Aired: </span>
              {anime.aired.string}
            </div>
          </div>
          <div>
            <div>
              <span className="font-semibold">Rank: </span>#{anime.rank}
            </div>
            <div>
              <span className="font-semibold">Rating: </span>{anime.rating}
            </div>
            {anime.studios.map(studio => (
              <div key={studio.mal_id}>
                <span className="font-semibold">Studios: </span>{studio.name}
              </div>
            ))}
          </div>
        </div>
        <ul className="flex gap-2 pt-4 w-fit text-white flex-wrap">
          {anime.genres.map(genre => (
            <li
              key={genre.mal_id}
              className="flex items-center text-sm rounded-lg font-semibold bg-blue-700 px-2"
            >
              {genre.name}
            </li>
          ))}
          {anime.demographics.map((demo) => (
            <li
              key={demo.mal_id}
              className="flex items-center text-sm rounded-lg font-semibold bg-blue-700 px-2"
            >
              {demo.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}