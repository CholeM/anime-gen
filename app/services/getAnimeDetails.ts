import { AnimeInfo, Recommendation, Relations } from "../models/anime";

type Response = {
  data: AnimeInfo;
}

type Rec = {
  data: Recommendation[];
}

type Related = {
  data: Relations[];
}

export const getAnimeDetails = async (
  id: string
): Promise<Response | undefined> => {
  const URL =  `https://api.jikan.moe/v4/anime/${id}/full`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Error : ${res.status} | ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err)
  }
};

export const getRecommendations = async (
  id: string
): Promise<Rec | undefined> => {
  const URL = `https://api.jikan.moe/v4/anime/${id}/recommendations`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Error : ${res.status} | ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err)
  }
}

export const getRelatedMedia = async (
  id: string
): Promise<Related | undefined> => {
  const URL = `https://api.jikan.moe/v4/anime/${id}/relations`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Error : ${res.status} | ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err)
  }
}