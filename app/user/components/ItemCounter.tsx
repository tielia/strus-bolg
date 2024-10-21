import { ChevronRightIcon } from "./ChevronRightIcon";
export const ItemCounter = ({ number = 0 }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRightIcon className="text-xl" />
  </div>
);