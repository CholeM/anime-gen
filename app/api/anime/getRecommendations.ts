import { Recommendation, Relation } from "@/app/models/recommendations";
import { notFound } from "next/navigation";

const URL = process.env.APP_API_URL;


export async function getRecommendations(id: number) {
  const response = await fetch(
    `${URL}/anime/${id}/recommendations`, {
      cache: 'no-cache'
    }
  )

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const recommendations = (await response.json()) as Recommendation[];

  if (recommendations.length === 0) {
    notFound()
  }

  return recommendations;
}

export async function getRelations(id: number) {
  const response = await fetch(
    `${URL}/anime/${id}/relations`, {
      cache: 'no-cache'
    }
  )

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const relations = (await response.json()) as Relation[];

  if (relations.length === 0) {
    notFound()
  }

  return relations;
}