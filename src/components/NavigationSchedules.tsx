import NavButton from "./NavButton";
import { days } from "@/contexts/ContextProvider";

const NavigationSchedules: React.FC = () => {

  return (
    <nav className="flex justify-start gap-[3px] my-4 w-full">
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