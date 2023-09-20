export type Rankings = {
  mal_id: number;
  images: Images;
  title: string;
  rank: number;
};

type Images = {
  jpg: Jpg;
}

type Jpg = {
  image_url: string;
  large_image_url: string;
}