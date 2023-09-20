"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} | ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        let id = data["data"]["mal_id"] as number;
        router.push(`/anime/${id}`)
      })
      .catch((err) => {
        setError(err.toString());
      });
  }, [router]);

  if (error) {
    return (
      <>{error}</>
    )
  } else {
    return (<></>)
  }
}