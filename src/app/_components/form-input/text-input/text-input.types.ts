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
  rules?: RegisterOptions<TFormValues, Path<TFormValues>> | undefined;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
};
