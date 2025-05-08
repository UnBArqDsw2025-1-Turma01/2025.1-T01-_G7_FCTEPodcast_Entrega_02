import {
  Avatar,
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar className="bg-primary-50">
      <NavbarBrand>
        <Image src={logo} className="h-12" />
      </NavbarBrand>

      <NavbarContent justify="center" className="">
        <Input startContent={<FaSearch />} className="w-full" />
      </NavbarContent>

      <NavbarContent justify="end">
        <Avatar />
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
