import * as React from "react";

import { FooterComponent } from "../components/Footer";
import { NavBarComponent } from "../components/NavBar";

function IndexPage() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <div className="border-2 flex-1 h-screen">
        <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          What items to store?
        </p>
      </div>
      <FooterComponent />
    </React.Fragment>
  );
}

export default IndexPage;
