'use client'

import NavButton from "./NavButton";
import { useStateContext } from "@/contexts/ContextProvider";
import { days } from "@/contexts/ContextProvider";

const NavigationSchedules: React.FC = () => {

  return (
    <nav className="flex justify-between my-4 w-full">
      {days.map(day =>
        <NavButton
          key={day.value}
          day={day.value}
        >{day.title}</NavButton>
      )}
    </nav>
  )
}

export default NavigationSchedules