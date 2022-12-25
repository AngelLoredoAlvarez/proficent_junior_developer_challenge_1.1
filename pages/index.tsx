import * as React from "react";

import { FooterComponent } from "../components/Footer";
import { NavBarComponent } from "../components/NavBar";

function IndexPage() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <div className="flex-1 h-screen bg-white dark:bg-slate-500">
        <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl dark:text-white">
          What items to store?
        </p>
        <p className="text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl dark:text-white">
          Select which items you wish to store before moving to
        </p>
        <p className="text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl dark:text-white">
          your new home. We'll keep'em safe!
        </p>
      </div>
      <FooterComponent />
    </React.Fragment>
  );
}

export default IndexPage;
