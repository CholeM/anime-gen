import { NextResponse } from "next/server";

const revalidation = 86400;
const url = 'https://api.jikan.moe/v4/anime/';

interface Params {
  id: string
}
export async function GET(request: Request, context: {params: Params}) {
  try {
    const response = await fetch(`${url}${context.params.id}/full`, { next: { revalidate: revalidation } })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`);
    }

    const jsonRes = await response.json();
    
    return NextResponse.json(jsonRes.data);
  } catch (err: any) {
    console.log(err.message)
  }  

}
