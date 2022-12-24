import { DarkThemeToggle, Navbar } from "flowbite-react";
import * as React from "react";

const NavBarComponent: React.FC = () => {
  return (
    <Navbar className="bg-orange-500" fluid={true}>
      <Navbar.Brand href="#">
        <DarkThemeToggle className="text-white" />
      </Navbar.Brand>
      <Navbar.Toggle className="font-bold text-white" />
      <Navbar.Collapse>
        <Navbar.Link className=" font-bold text-white" href="#">
          How We Work
        </Navbar.Link>
        <Navbar.Link className="font-bold text-white" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="font-bold text-white" href="#">
          Free Quote
        </Navbar.Link>
        <Navbar.Link className="font-bold text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBarComponent };
