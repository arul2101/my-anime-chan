import Link from "next/link";
import InputSearch from "./InputSearch";
import HeaderTitle from "./HeaderTitle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 lg:flex-nowrap md:flex-nowrap flex-wrap gap-2">
      <HeaderTitle />

      <InputSearch />
    </nav>
  )
}

export default Navbar;
