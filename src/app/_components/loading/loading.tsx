import classNames from "classnames";
import { Size } from "../types/size.type";
import { LoadingProps } from "./loading.types";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant }
  );
  return <span className={classes}></span>;
};
