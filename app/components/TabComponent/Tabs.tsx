"use client"
import React, { useState } from "react";
import Overview from "./Overview";
import Watch from "./Watch";
import { Recommendation, Relation } from "@/app/models/recommendations";
import { External, Trailer } from "@/app/models/anime";

type TabsProps = {
  recommendations: Recommendation[],
  relatedMedia: Relation[],
  trailer: Trailer,
  streaming: External[],
}

export default function Tabs(
  { recommendations, relatedMedia, trailer, streaming }: TabsProps
  ) {
  const [activeTab, setActiveTab] = useState("tab1");

  const style = "relative flex items-center justify-center gap-2 px-1 py-3 hover:text-blue-700"
  const active = "text-blue-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700"

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  }
  return (
    <div className="container mx-auto px-8 justify-center pb-10">
      <ul className="-mb-px flex items-center gap-4 font-medium border-b dark:border-black">
        <li className="flex-1">
          <a
            className={ activeTab === "tab1" ? `${style} ${active}` : `${style}`}
            onClick={() => handleChangeTab("tab1")}
          >
            Overview
          </a>
        </li>
        <li className="flex-1">
          <a 
            className={activeTab === "tab2" ? `${style} ${active}` : `${style}`}            
            onClick={() => handleChangeTab("tab2")}
          >
            Watch
          </a>
        </li>
      </ul>

      <div className="mt-8">
        { activeTab === "tab1" ?
          <Overview 
            recommendations={recommendations}
            relatedMedia={relatedMedia}
          />
        :
          <Watch 
            trailer={trailer}
            streaming={streaming}
          />
        }
      </div>
    </div>
  )
}