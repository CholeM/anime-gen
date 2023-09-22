import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import { EpisodesList } from "@/app/models/anime";

export default function Episodes() {
  const params = useParams();
  const id = params.id;
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [episodes, setEpisodes] = useState<EpisodesList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/episodes?page=${currentPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} | ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setEpisodes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
      })
  }, [id, currentPage]);

  const lastPage = useMemo(
    () => episodes?.pagination.last_visible_page,
    [episodes?.pagination.last_visible_page]
  );

  if (error) {
    return (
      <>{error}</>
    )
  } 

  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-5">List of Episodes</h2>
      <div className=" flex flex-col">
        {lastPage && lastPage > 1 ? (
          <Pagination
            total={lastPage}
            onChange={(page) => setCurrentPage(page)}
            page={currentPage}
            isCompact
            showControls
            className="mb-4"
          />
        ) : null }
        { loading ? (
          <span className="loading">
            <ArrowPathIcon className="w-[50px] animate-spin" />
          </span>
        ) : (
          <table className="table text-base">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-900">
              <th>No.</th>
              <th className="text-left">Title</th>
              <th className="text-left">Air Date</th>
              <th>Filler</th>
            </tr>
          </thead>
          <tbody>
            {episodes?.data.map((episode, index) => (
              <tr
                key={episode.mal_id}
                className={`${
                  index % 2 === 0 ? 'bg-base-200' : 'bg-slate-100 dark:bg-slate-900'
                } rounded-lg`}
              >
              <th>{episode.mal_id}</th>
              <td>{episode.title}</td>
              <td className="text-left">{new Date(episode.aired).toLocaleString()}</td>
              <td>
                {episode.filler ? (
                  <CheckIcon className="w-4" />
                ) : null}
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
        )}

        
      </div>
    </div>
  )
}