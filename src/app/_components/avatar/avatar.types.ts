import { ComponentBase } from "../types/component-base.type";

export type AvatarProps = Omit<ComponentBase, "isDisabled"> & {
  src?: string;
  alt?: string;
};
