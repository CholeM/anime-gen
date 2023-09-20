import { NextResponse } from "next/server";

const revalidation = 86400;
const url = 'https://api.jikan.moe/v4/top/anime?limit=15';

export async function GET(request: Request) {
  try {
    const response = await fetch(url, { next: { revalidate: revalidation } })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`);
    }

    const jsonRes = await response.json();
    
    return NextResponse.json(jsonRes.data);
  } catch (err: any) {
    console.log(err.message)
  }  
}
