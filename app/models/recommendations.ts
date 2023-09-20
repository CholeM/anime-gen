export interface Recommendation {
  entry: Entry;
  url: string;
  votes: number;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: { jpg: Image, webp: Image }
  title: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Relation {
  relation: string;
  entry: relEntry[];
}

export interface relEntry {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}