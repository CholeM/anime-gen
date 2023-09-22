"use client"
import React, { useState } from "react";
import Overview from "./Overview";
import Watch from "./Watch";
import { External, Relations, Trailer } from "@/app/models/anime";
import { Recommendation } from "@/app/models/anime";
import Episodes from "./Episodes";

type TabsProps = {
  recommendations: Recommendation[],
  relatedMedia: Relations[],
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

  const getTab = (tab: string) => {
    let item;
    switch (tab) {
      case "tab1":
        item = (
          <Overview 
            recommendations={recommendations}
            relatedMedia={relatedMedia}
          />
        );
        break;
      case "tab2":
        item = (
          <Watch 
            trailer={trailer}
            streaming={streaming}
          />
        );
        break;
      case "tab3":
        item = (
          <Episodes />
        );
        break;
      default: 
        item = (<></>)
    }
    return item;
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
        <li className="flex-1">
          <a 
            className={activeTab === "tab3" ? `${style} ${active}` : `${style}`}            
            onClick={() => handleChangeTab("tab3")}
          >
            Episodes
          </a>
        </li>
      </ul>

      <div className="mt-8">
        {getTab(activeTab)}
      </div>
    </div>
  )
}