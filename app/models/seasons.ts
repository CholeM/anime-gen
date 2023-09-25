export interface Seasons {
  pagination: Pagination;
  data: AnimeInfo[];
}

export interface AnimeInfo {
  mal_id:          number;
  url:             string;
  images:          { jpg: Image, webp: Image };
  trailer:         Trailer;
  approved:        boolean;
  titles:          Title[];
  title:           string;
  title_english:   string;
  title_japanese:  string;
  title_synonyms:  string[];
  type:            string;
  source:          string;
  episodes:        number | null;
  status:          string;
  airing:          boolean;
  aired:           Aired;
  duration:        string;
  rating:          string | null;
  score:           number | null;
  scored_by:       number | null;
  rank:            number | null;
  popularity:      number;
  members:         number;
  favorites:       number;
  synopsis:        string;
  background:      null;
  season:          string | null;
  year:            number | null;
  broadcast:       Broadcast;
  producers:       Demographic[];
  licensors:       Demographic[];
  studios:         Demographic[];
  genres:          Demographic[];
  explicit_genres: any[];
  themes:          Demographic[];
  demographics:    Demographic[];
}

export interface Aired {
  from:   Date;
  to:     Date | null;
  prop:   Prop;
  string: string;
}

export interface Prop {
  from: From;
  to:   From;
}

export interface From {
  day:   number | null;
  month: number | null;
  year:  number | null;
}

export interface Broadcast {
  day:      string;
  time:     string;
  timezone: string;
  string:   string;
}

export interface Demographic {
  mal_id: number;
  type:   DemographicType;
  name:   string;
  url:    string;
}

export enum DemographicType {
  Anime = "anime",
}

export interface Image {
  image_url:       string;
  small_image_url: string;
  large_image_url: string;
}

export interface Title {
  type:  string;
  title: string;
}

export interface Trailer {
  youtube_id: string;
  url:        string;
  embed_url:  string;
  images:     Images;
}

export interface Images {
  image_url:         string;
  small_image_url:   string;
  medium_image_url:  string;
  large_image_url:   string;
  maximum_image_url: string;
}

export interface Pagination {
  last_visible_page: number,
  has_next_page: boolean,
  current_page: number,
  items: Items,
}

export interface Items {
  count:    number;
  total:    number;
  per_page: number;
}

export interface SeasonsLists {
  data: SeasonsInfo[]
}

export interface SeasonsInfo {
  year: number;
  seasons: string[];
}
