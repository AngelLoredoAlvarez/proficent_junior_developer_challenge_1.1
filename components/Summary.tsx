import { Button, Card } from "flowbite-react";
import * as React from "react";

const SummaryComponent: React.FC = () => {
  return (
    <Card>
      <div className="grid grid-cols-2 gap-10">
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total Items:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          12
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total M2:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          8.55
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Subtotal:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          $ 1,710.00
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Tax:
        </p>
        <p className="text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          $ 237.00
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Total:
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          $ 1,983.60
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Due Today 50%:
        </p>
        <p className="font-bold text-gray-900 dark:text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          $ 991.80
        </p>
        <div className="col-span-2">
          <Button className="flex w-full bg-orange-500 hover:bg-orange-400 dark:bg-slate-700 dark:hover:bg-slate-900">
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { SummaryComponent };
