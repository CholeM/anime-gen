import React from "react";
import { getData } from "@/app/services/getData";
import { Seasons } from "@/app/models/seasons";
import FilterPagination from "@/app/components/FilterPagination";
import AnimeFilters from "@/app/components/AnimeFilters";
import { TYPE } from "@/app/constant/filters";
import CardDetailed from "@/app/components/CardDetailed";

type Props = {
  searchParams?: {
    page: string;
    type: string;
  }
}

export default async function Page({ searchParams }: Props) {
  const page = searchParams?.page || '1';
  const type = searchParams?.type || 'tv';

  const getSeason = () => {
    const date = new Date;
    const month = date.getMonth();
    const year = date.getFullYear();

    switch (month) {
      case 0:
      case 1:
      case 2:
        return `Winter, ${year}`;
      case 3:
      case 4:
      case 5:
        return `Spring, ${year}`;
      case 6:
      case 7:
      case 8:
        return `Summer, ${year}`;
      default:
        return `Fall, ${year}`;
    }
  }

  const URL = `https://api.jikan.moe/v4/seasons/now?sfw&page=${page}&filter=${type}`;

  const data = await getData<Seasons>(URL);

  return (
    <div className="container mx-auto px-4 pb-5">
      <div className="my-5">
        <h2 className="text-2xl font-bold">
          Current Season - <span className="text-blue-500">{getSeason()}</span>
        </h2>
      </div>
      {data?.data.length === 0 ? (
        <>No Data</>
      ) : (
        <>
          {typeof data !== "undefined" ? (
            <div className="flex flex-col items-center">
              <h3 className="text-xl mb-3">Filter:</h3>
              <AnimeFilters filters={TYPE} newSearchParam="type" />

              <FilterPagination
                lastPage={data.pagination.last_visible_page}
              />
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
                {data.data.length > 0 ? (
                  <>
                    {data.data.map((show) => (
                      <div key={show.mal_id}>
                        <CardDetailed show={show} />
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          ) : (
            <>
            </>
          )}
        </>
      )}
    </div>
  )
}