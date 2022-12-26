import { Button, Card, TextInput } from "flowbite-react";
import * as React from "react";

import { Item } from "../data/store";
import {
  BedSvg,
  DeskSvg,
  DiningSvg,
  FurnitureSvg,
  OvenSvg,
  RefrigeratorSvg,
  SofaSvg,
  TvSvg,
  WardroveSvg,
  WasherDryerSvg,
} from "./Svgs";

const ItemComponent: React.FC<Item> = ({ icon, description }) => {
  return (
    <Card>
      <div className="flex justify-center">
        {icon === "bed" ? (
          <BedSvg />
        ) : icon === "refrigerator" ? (
          <RefrigeratorSvg />
        ) : icon === "furniture" ? (
          <FurnitureSvg />
        ) : icon === "oven" ? (
          <OvenSvg />
        ) : icon === "sofa" ? (
          <SofaSvg />
        ) : icon === "tv" ? (
          <TvSvg />
        ) : icon === "washer-dryer" ? (
          <WasherDryerSvg />
        ) : icon === "dining" ? (
          <DiningSvg />
        ) : icon === "desk" ? (
          <DeskSvg />
        ) : icon === "wardrobe" ? (
          <WardroveSvg />
        ) : null}
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        {description}
      </p>
      <div className="flex">
        <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Button className="bg-orange-500 hover:bg-orange-400 dark:bg-slate-700 dark:hover:bg-slate-800">
            -
          </Button>
        </span>
        <TextInput className="rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span className="inline-flex items-center border border-r-0 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Button className="bg-orange-500 hover:bg-orange-400 dark:bg-slate-700 dark:hover:bg-slate-800">
            +
          </Button>
        </span>
      </div>
    </Card>
  );
};

export { ItemComponent };
