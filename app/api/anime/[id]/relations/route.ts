import { NextResponse } from "next/server";

const revalidation = 86400;

interface Params {
  id: number;
}

export async function GET(request: Request, context: {params: Params}) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${context.params.id}/relations`,
    { next: { revalidate: revalidation } });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`);
    }

    const jsonRes = await response.json();

    return NextResponse.json(jsonRes.data);
  } catch (err: any) {
    console.log(err.message);
  }
  
}