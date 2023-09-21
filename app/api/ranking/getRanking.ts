import { notFound } from "next/navigation";
import type { AnimeInfo } from "@/app/models/anime";
import "server-only";

export async function getAllTime() {
  const res = await fetch(
    `${URL}/allTime`, {
      cache: 'no-cache'
    }
  )

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const allTimeRanking = (await res.json()) as AnimeInfo[];

  if (allTimeRanking.length === 0) {
    notFound();
  }

  const data = allTimeRanking.sort((a, b) => a.rank - b.rank)
  const top = data.slice(0, 10)
  return top;
}

export async function getAiring() {
  const API_ENDPOINT = 'https://api.jikan.moe/v4/top/anime?filter=airing&limit=10';

  try { 
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`)
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
  
}