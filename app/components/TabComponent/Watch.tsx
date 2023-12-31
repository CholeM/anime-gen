import React from "react";
import { Trailer, External } from "@/app/models/anime";

type WatchProps = {
  trailer: Trailer,
  streaming: External[],
}

export default function Watch({ trailer, streaming }: WatchProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-5">Trailer</h2>
      {trailer.url ? (
        <div className="md:h-[250px] h-[200px] md:w-[500px] w-[250px] relative overflow-hidden mb-5">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="w-full h-full"
          />
        </div>
      ) : null }
      <h2 className="text-2xl font-bold mb-5">Stream</h2>
      <div className="flex">
        {...streaming.map(stream => (
          <a 
            key={stream.name}
            href={stream.url} 
            className="whitespace-nowrap rounded-lg bg-blue-500 mr-5 text-white text-center px-3.5 py-3 inline-block hover:bg-blue-400"
          >
            {stream.name}
          </a>
        ))}
      </div>
    </div>
  )
}