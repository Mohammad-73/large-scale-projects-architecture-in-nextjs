import { ComponentBase } from "../types/component-base.type";

export type AlertProps = Omit<ComponentBase, "size" | "isDisabled"> & {
  showIcon?: boolean;
  children: React.ReactNode;
};
