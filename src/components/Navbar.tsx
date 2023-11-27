import InputSearch from "./InputSearch";
import HeaderTitle from "./HeaderTitle";
import Menu from "./Menu";

const Navbar: React.FC = () => {
  return (
    <nav className="flex md:flex-row md:items-center md:justify-between py-4 md:flex-nowrap gap-2 w-[100%] flex-col">
      <HeaderTitle />
      <Menu />
      <InputSearch />
    </nav>
  )
}

export default Navbar;
