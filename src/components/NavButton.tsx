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
      className={`px-8 py-3 hover:bg-primary rounded-lg ${selectedDay === day && 'bg-primary'}`}
      onClick={() => setSelectedDay(day)}
    >{children}</button>
  )
}

export default NavButton