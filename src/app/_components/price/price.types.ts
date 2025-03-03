import { ComponentBase } from "../types/component-base.type";

export type PriceProps = Omit<ComponentBase, "isDisabled" | "variant"> & {
  price?: number;
  text?: string;
};
