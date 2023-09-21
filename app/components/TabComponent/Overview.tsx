import React from "react";
import CardRec from "../CardRec";
import { Relations, Recommendation } from "@/app/models/anime";



export default function Overview(
  { recommendations, relatedMedia }: { recommendations: Recommendation[], relatedMedia: Relations[] }
) {

  return (
    <div>
      <div className="mb-12">
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Related Media</h2>
        </div>

        <div>
          {...relatedMedia.map((media) => (
            <div className="mb-2" key={media.relation}>
              <h3 className="text-lg">
                {media.relation}
              </h3>
              <ul>
                {...media.entry.map((title) => (
                  <li key={title.mal_id} className="text-sm">
                    {title.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-3">Recommendations</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {...recommendations.slice(0, 5).map((media) => (
              <div 
                className="relative mx-auto w-full max-w-sm"
                key={media.entry.mal_id}
              >
                <CardRec
                  anime={media as Recommendation}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}