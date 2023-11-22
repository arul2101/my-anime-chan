import Schedules from "@/components/Schedules";
import TopAnime from "@/components/TopAnime";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col">
      <Schedules />
      <TopAnime />
    </div>
  )
}

export default Home;
