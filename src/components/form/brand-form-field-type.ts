import { RegisterOptions } from "react-hook-form";
export type BrandFormFieldType = {
  name: string;
  label?: string;
  required?: boolean;
  select?: boolean;
  defaultValue?: string | number | boolean | Date | undefined | any;
  register?: RegisterOptions;
  helperText?: string;
  rows?: number;
  multiline?: boolean;
  type?: string;
  readOnly?: boolean;
  options?: {
    label?: string;
    value?: string | number | boolean;
  }[];
  inputProps?: any;
  placeholder?: string;
};
