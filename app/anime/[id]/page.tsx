import React from "react";
import AnimeImage from "@/app/components/AnimeImage";
import Details from "@/app/components/Details";
import Synopsis from "@/app/components/Synopsis";
import Tabs from "@/app/components/TabComponent/Tabs";
import { getAnimeDetails, getRecommendations, getRelatedMedia } from "@/app/services/getAnimeDetails";
import { Recommendation, Relation } from "@/app/models/anime";

export default async function Page({ params }: { params: { id: string } }) {
  const aData = await getAnimeDetails(params.id);
	const recData = await getRecommendations(params.id)
	const relData = await getRelatedMedia(params.id)
	const anime = aData?.data;
	const recommendations = recData?.data;
	const relatedMedia = relData?.data;

	if (typeof anime === 'undefined') {
		return (
			<>No Data</>
		)
	} else {
		return (
			<>
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
					recommendations={recommendations as Recommendation[]}
					relatedMedia={relatedMedia as Relation[]}
					trailer={anime.trailer}
					streaming={anime.streaming}
				/>
			</>
  	)
	}
}