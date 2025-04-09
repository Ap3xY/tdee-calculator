import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link to={"/"}>
          <p className="font-bold text-inherit">TDEE Calculator</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link to={"/About"}>About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/FAQ"}>FAQ</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/Contact"}>Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
