"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimeType } from "../models/animeFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  filters: 
    | AnimeType;
  newSearchParam: string;
}

export default function AnimeFilters({ filters, newSearchParam }: Props) {
  const statusOptions = useMemo(() => Object.values(filters), [filters]);
  const router = useRouter();
  let firstTime = useRef(true);
  const searchParams = useSearchParams();
  const SEARCH_PARAMS: unknown = useSearchParams();
  const [filter, setFilter] = useState(() => {
    if (searchParams.get(newSearchParam)) {
      return searchParams.get(newSearchParam) as string;
    } else {
      return filters.default;
    }
  });
  const pathname = usePathname();

  const searchParamHandler = useCallback(
    (value: string) => {
      const newURLSearchParam = new URLSearchParams(
        SEARCH_PARAMS as URLSearchParams
      );
      newURLSearchParam.delete('page');
      newURLSearchParam.set(newSearchParam, value);
      console.log(newURLSearchParam);

      return newURLSearchParam.toString();
    },
    [SEARCH_PARAMS, newSearchParam]
  );

  useEffect(() => {
    if (!firstTime.current) {
      router.push(pathname + '?' + searchParamHandler(filter));
    } else {
      firstTime.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  
  return (
    <>
      <div className='flex flex-row max-md:items-center gap-4 md:gap-2'>
        {statusOptions.map((option) => (
          <button
            onClick={() => setFilter(option)}
            className={
              `text-sm max-md:text-md font-bold hover:bg-blue-400 hover:text-white transition-all duration-300 border border-blue-400 rounded-full cursor-pointer w-fit max-md:w-20 px-2 min-w-[50px] 
            ${
              filter === option ? 'bg-blue-400 text-black' : ''
            }`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}