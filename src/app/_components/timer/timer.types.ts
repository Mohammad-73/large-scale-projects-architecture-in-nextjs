import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";
import { Variant } from "../types/variant.type";

export type TimerRef = {
  start: () => void;
  pause: () => void;
  restart: (expiryTimestamp: Date) => void;
  resume: () => void;
};

type VariantWithGradient = Omit<ComponentBase, "variant" | "isDisabled">;

export type TimerProps = VariantWithGradient & {
  variant?: Variant | "gradient";
  expiryTimestamp: Date;
  autoStart?: boolean;
  showTitle?: boolean;
  showDays?: boolean;
  shoHours?: boolean;
  onExpire?: () => void;
};

export type TimerProgressProps = VariantWithGradient & {
  variant?: Variant | "gradient";
  value: number;
  maxValue: number;
  showTitle?: boolean;
  datePart: string;
  children: ReactNode;
};
