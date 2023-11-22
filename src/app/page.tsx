'use client'

import LoadingSpinner from "@/components/LoadingSpinner";
import Schedules from "@/components/Schedules";
import TopAnime from "@/components/TopAnime";
import { useState } from "react";

const Home: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState(true);

  setTimeout(() => {
    setIsWaiting(false)
  }, 2000);

  return (
    <div className="flex justify-between lg:flex-row flex-col">
      {!isWaiting
        ? <Schedules />
        : <LoadingSpinner />
      }
      <TopAnime />
    </div>
  )
}

export default Home;
