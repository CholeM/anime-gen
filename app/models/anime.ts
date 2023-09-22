export interface Airing {
  pagination: Pagination;
  data: AnimeInfo[];
}

export interface Top {
  pagination: Pagination;
  data: AnimeInfo[];
}

export interface EpisodesList {
  pagination: EpPagination;
  data: Episodes[];
}

export interface EpPagination {
  last_visible_page: number;
  has_next_page: boolean;
}

export interface Episodes {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}


export interface AnimeInfo {
  mal_id: number;
  url: string;
  images: { jpg: Image, webp: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
  relations: Relation[];
  theme: Theme;
  external: External[];
  streaming: External[];
}

export interface Aired {
  from: string;
  to: string;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Demographic {
  mal_id: number;
  type: Type;
  name: string;
  url: string;
}

export enum Type {
  Anime = "anime",
  Manga = "manga",
}

export interface External {
  name: string;
  url: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Relation {
  relation: string;
  entry: Demographic[];
}

export interface Theme {
  openings: string[];
  endings: string[];
}

export interface Title {
  type: string;
  title: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
}

export interface Images {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count:    number;
  total:    number;
  per_page: number;
}

export interface Recommendation {
  entry: Entry;
  url: string;
  votes: number;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: { jpg: Image, webp: Image };
  title: string;
}

export interface Relations {
  relation: string;
  entry: RelEntry[];
}

export interface RelEntry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}