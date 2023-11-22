import Schedules from "@/components/Schedules";
import TopAnime from "@/components/TopAnime";

const Home: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Schedules />
      <TopAnime />
    </div>
  )
}

export default Home;
