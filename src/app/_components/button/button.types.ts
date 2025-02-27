import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";
import { LoadingBehavior } from "../types/loading-behavior.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
