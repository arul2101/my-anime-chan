import InputSearch from "./InputSearch";
import HeaderTitle from "./HeaderTitle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 md:flex-nowrap flex-wrap gap-2 w-[100%]">
      <HeaderTitle />

      <InputSearch />
    </nav>
  )
}

export default Navbar;
