'use client'

import { useStateContext } from "@/contexts/ContextProvider";

type NavButtonProps = {
  children: React.ReactNode;
  day: string;
}

const NavButton: React.FC<NavButtonProps> = ({ children, day }) => {
  const { selectedDay, setSelectedDay } = useStateContext();
  return (
    <button
      className={`md:py-3 md:w-[14%] py-1 w-[3rem] hover:bg-primary rounded-lg ${selectedDay === day && 'bg-primary'}`}
      onClick={() => setSelectedDay(day)}
    >{children}</button>
  )
}

export default NavButton