import React from "react";
import { ChevronRightIcon } from "./ChevronRightIcon";

interface ItemCounterProps {
  number: number;
}

export const ItemCounter: React.FC<ItemCounterProps> = ({ number }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRightIcon className="text-xl" />
  </div>
);
