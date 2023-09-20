import { notFound } from "next/navigation";
import type { AnimeInfo } from '@/app/models/anime';
//import "server-only";

const URL = process.env.APP_API_URL;

export async function getAnimeDetails(id: Number) {
  const response = await fetch(
    `${URL}/anime/${id}`, {
      cache: 'no-cache'
    }
  )

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  
  const anime = (await response.json()) as AnimeInfo;

  if (!anime) {
    notFound();
  }

  return anime;
}