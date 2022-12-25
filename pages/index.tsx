import * as React from "react";

import { FooterComponent } from "../components/Footer";
import { NavBarComponent } from "../components/NavBar";

function IndexPage() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <div className="border-2 flex-1 h-screen" />
      <FooterComponent />
    </React.Fragment>
  );
}

export default IndexPage;
