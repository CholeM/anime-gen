export interface Ranking {
  mal_id: number;
  url: string;
  images: { jpg: Image; webp: Image };
  title: string;
  rank: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}