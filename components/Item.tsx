import { Button, Card, TextInput } from "flowbite-react";
import * as React from "react";

const ItemComponent: React.FC = () => {
  return (
    <Card>
      <div className="border-2" />
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        Beds
      </p>
      <div className="flex">
        <span className="inline-flex items-center text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Button className="bg-orange-500 dark:bg-slate-700">-</Button>
        </span>
        <TextInput className="rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span className="inline-flex items-center border border-r-0 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Button className="bg-orange-500 dark:bg-slate-700">+</Button>
        </span>
      </div>
    </Card>
  );
};

export { ItemComponent };
