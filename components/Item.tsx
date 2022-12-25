import { Card } from "flowbite-react";
import * as React from "react";

const ItemComponent: React.FC = () => {
  return (
    <Card>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
        Beds
      </p>
      <div className="border-2" />
    </Card>
  );
};

export { ItemComponent };
