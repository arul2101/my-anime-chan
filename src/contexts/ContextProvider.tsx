'use client'

import { useAnimeSchedules } from "@/hooks/useAnimeSchedules";
import { AnimesSchedule } from "@/types/types";
import { createContext, useState, useContext } from "react";

export const days = [
  { title: "SUN", value: "sunday" },
  { title: "MON", value: "monday" },
  { title: "TUE", value: "tuesday" },
  { title: "WED", value: "wednesday" },
  { title: "THU", value: "thursday" },
  { title: "FRI", value: "friday" },
  { title: "SAT", value: "saturday" },
];

const date = new Date();
let dayNow = days[date.getDay()].value;

type test = {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
}

const StateContext = createContext<test | any>({});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState<string>(dayNow);
  return (
    <StateContext.Provider value={{
      selectedDay,
      setSelectedDay,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);