import * as React from "react";

import { FooterComponent } from "../components/Footer";
import { ItemComponent } from "../components/Item";
import { NavBarComponent } from "../components/NavBar";
import { SummaryComponent } from "../components/Summary";

function IndexPage() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <div className="bg-white dark:bg-slate-500 grid gap-10 items-center">
        <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl dark:text-white mt-20">
          What items to store?
        </p>
        <div>
          <p className="text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl dark:text-white">
            Select which items you wish to store before moving to
          </p>
          <p className="text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl dark:text-white">
            your new home. We'll keep'em safe!
          </p>
        </div>
        <div className="mx-5 md:mx10 lg:mx-20 xl:mx-30 2xl:mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5">
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
        </div>
        <div className="flex justify-center mb-20">
          <SummaryComponent />
        </div>
      </div>
      <FooterComponent />
    </React.Fragment>
  );
}

export default IndexPage;
