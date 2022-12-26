import { Button, Card } from "flowbite-react";
import * as React from "react";
import shallow from "zustand/shallow";

import { useStore } from "../data/store";

const SummaryComponent: React.FC = () => {
  const { totalItems, totalM2, subtotal, tax, total, dueToday50, clearItems } =
    useStore(
      (state) => ({
        totalItems: state.totalItems,
        totalM2: state.totalM2,
        subtotal: state.subtotal,
        tax: state.tax,
        total: state.total,
        dueToday50: state.dueToday50,
        clearItems: state.clearItems,
      }),
      shallow
    );

  return (
    <Card>
      <div className="grid grid-cols-2 gap-10">
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total Items:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {totalItems}
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total M2:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {totalM2}
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Subtotal:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {subtotal.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Tax:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {tax.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total:
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {total.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Due Today 50%:
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {dueToday50.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </p>
        <div className="col-span-2">
          <Button
            className="flex w-full bg-orange-500 hover:bg-orange-400 dark:bg-slate-700 dark:hover:bg-slate-900"
            onClick={() => clearItems()}
          >
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { SummaryComponent };
