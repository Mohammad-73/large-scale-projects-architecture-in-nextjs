import { ComponentBase } from "../types/component-base.type";

export type AuthCodeProps = Omit<ComponentBase, "size"> & {
  authFocus?: boolean;
  length?: number;
  onChange: (value: string) => void;
};

export type AuthInputProps = {
  min?: string;
  max?: string;
  pattern: string;
};
