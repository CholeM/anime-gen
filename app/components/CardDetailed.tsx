import { AnimeInfo, Seasons } from "@/app/models/seasons";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  show: AnimeInfo;
}
export default async function CardDetailed({ show }: Props) {

  return (
    <Link
      href={`/anime/${show.mal_id}`}
    >
      <div className="rounded-lg shadow-md p-2">
        <div className="relative w-[150px] h-[230px]">
          <Image
            src={show.images.jpg.image_url}
            alt={`${show.title} anime`}
            fill
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div>
          <h3 className="text-base py-1 font-semibold truncate">
            {show.title}
          </h3>
          <div className="pb-2">
          <ul className="flex flex-row gap-1 pb-2 text-sm overflow-x-scroll">
            {show.genres.map(genre => (
              <li key={genre.mal_id} className="bg-blue-500 text-white rounded-lg px-2">
                {genre.name}
              </li>
            ))}
            {show.demographics.map(demo => (
              <li key={demo.mal_id} className="bg-blue-500 text-white rounded-lg px-2">
              {demo.name}
            </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </Link>
  )
}