import { ComponentBase } from "../types/component-base.type";

export type RatingProps = Omit<ComponentBase, "isDisabled"> & {
  rate: number;
};
