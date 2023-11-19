import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary flex justify-between items-center py-4 px-10 lg:flex-nowrap md:flex-nowrap flex-wrap gap-2">
      <h2 className="font-semibold text-[2rem] text-secondary">
        <Link href="/">MyAnimeList</Link>
      </h2>

      <InputSearch />
    </nav>
  )
}

export default Navbar;
