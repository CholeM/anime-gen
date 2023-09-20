export type Anime = {
  title: string;
  title_english: string;
  type: string;
  episodes: number;
  status: string;
  aired: Aired;
  synopsis: string;
  season: string;
  year: number;
  genres: Array<{ mal_id: number, name: string }>;
  demographics: Array<{ mal_id: number, name: string }>;
  images: Images;
}

type Images = {
  jpg: Jpg;
}

type Jpg = {
  image_url: string;
  large_image_url: string;
}

type Aired = {
  from: string;
  to: string;
}