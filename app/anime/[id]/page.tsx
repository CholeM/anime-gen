import React from "react";
import { getAnimeDetails } from "@/app/api/anime/getAnimeDetails";
import AnimeImage from "@/app/components/AnimeImage";
import Details from "@/app/components/Details";
import Synopsis from "@/app/components/Synopsis";
import Tabs from "@/app/components/TabComponent/Tabs";
import { getRecommendations, getRelations } from "@/app/api/anime/getRecommendations";

export default async function Page({ params }: { params: { id: number } }) {
  const anime = await getAnimeDetails(params.id)
	const recommendations = await getRecommendations(params.id)
	const relatedMedia = await getRelations(params.id)


  return (
    <React.Fragment>
      <div className="py-5"></div>
			<div className="grid gap-8 sm:grid-cols-5 container mx-auto px-8 sm:px-[50px] justify-center">
				<AnimeImage
					url={anime.images.jpg.image_url}
					altText={anime.title}
				/>
				<div className="sm:col-span-4">
					<Details
						key={anime.mal_id}
						anime={anime}
					/>
					<Synopsis anime={anime} />
				</div>
			</div>
			<div className="mt-8"></div>

			<Tabs 
				recommendations={recommendations}
				relatedMedia={relatedMedia}
				trailer={anime.trailer}
				streaming={anime.streaming}
			/>
    </React.Fragment>
  )
}