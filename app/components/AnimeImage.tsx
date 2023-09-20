import React, { useEffect, useState } from "react";
import { getAnimeDetails } from "../api/anime/getAnimeDetails";

type ImageProps = {
  url: string;
  altText: string;
};


export default function AnimeImage({ url, altText }: ImageProps) {

  return (
      <div className="rounded-lg mx-auto">
        <img src={url} alt={`${altText}`} />
      </div>
  )
}