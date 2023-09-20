import { notFound } from "next/navigation";
import type { AnimeInfo } from "@/app/models/anime";
import "server-only";

const URL = process.env.APP_API_URL;


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
  const res = await fetch(
    `${URL}/airing`, {
      cache: 'no-cache'
    }
  )

  if (!res.ok) {
    throw new Error('Something went wrong!');
  }

  const airingRanking = (await res.json()) as AnimeInfo[];

  if (airingRanking.length === 0) {
    notFound();
  }

  return airingRanking;
}