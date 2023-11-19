import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary flex justify-between items-center p-4">
      <h2 className="font-semibold text-[2rem] text-secondary">
        <Link href="/">MyAnimeList</Link>
      </h2>

      <InputSearch />
    </nav>
  )
}

export default Navbar;
