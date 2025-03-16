import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { TextboxProps } from "../../textbox/textbox.types";

export type TextInputProps<TFormValues extends FieldValues> = Omit<
  TextboxProps,
  "name"
> & {
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
};
