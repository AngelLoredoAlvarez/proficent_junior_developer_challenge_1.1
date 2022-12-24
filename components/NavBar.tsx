import { DarkThemeToggle, Navbar } from "flowbite-react";
import * as React from "react";

const NavBarComponent: React.FC = () => {
  return (
    <Navbar className="bg-orange-500" fluid={true}>
      <DarkThemeToggle className="text-white" />
      <Navbar.Toggle className="font-bold text-white" />
      <Navbar.Collapse>
        <Navbar.Link className=" font-bold text-white">How We Work</Navbar.Link>
        <Navbar.Link className="font-bold text-white">Services</Navbar.Link>
        <Navbar.Link className="font-bold text-white">Free Quote</Navbar.Link>
        <Navbar.Link className="font-bold text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBarComponent };
