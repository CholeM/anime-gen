"use client";

import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  lastPage?: number;
};

export default function FilterPagination({ lastPage = 1 }: Props) {
  const searchParams = useSearchParams();
  const SEARCH_PARAMS: unknown = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = searchParams.get('page') || '1';

  const handlePagination = (page: number) => {
    const newSearchParams = new URLSearchParams(
      SEARCH_PARAMS as URLSearchParams
    );
    newSearchParams.set('page', page.toString());
    router.push(pathname + '?' + newSearchParams.toString());
  };

  return (
    <Pagination
      total={lastPage}
      page={parseInt(currentPage)}
      onChange={(page) => handlePagination(page)}
      className='my-4'
      isCompact
      showControls
    />
  );
}