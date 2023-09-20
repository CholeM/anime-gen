import React from "react";
import { Trailer, External } from "@/app/models/anime";

type WatchProps = {
  trailer: Trailer,
  streaming: External[],
}

export default function Watch({ trailer, streaming }: WatchProps) {
  return (
    <div>
      <div className="mb-12">
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Trailer</h2>
        </div>
        <div className="overflow-hidden relative h-80 w-[500px] mb-5">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="top-0 left-0 absolute h-[100%] w-[100%]"
          />
        </div>
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Stream</h2>
        </div>
        <div className="">
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
    </div>
  )
}