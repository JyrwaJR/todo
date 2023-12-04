import React from "react";
import BrandFormField, { BrandFormTag } from "./brand-form-field";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
type BrandFormProps<T> = {
  form: UseFormReturn<T | any>;
  onSubmit: SubmitHandler<T | any>;
  isLoading?: boolean;
  buttonTitle?: string;
  defaultValues?: T | any;
  inputFields?: any;
  className?: string;
};
const BrandForm = <T,>({
  form,
  defaultValues,
  onSubmit,
  buttonTitle,
  isLoading,
  inputFields,
  className,
}: BrandFormProps<T>) => {
  return (
    <BrandFormTag
      buttonTitle={buttonTitle ?? "Submit"}
      isLoading={isLoading}
      form={form}
      onSubmit={onSubmit}
    >
      <BrandFormField
        loading={isLoading || false}
        defaultValue={defaultValues}
        form={form}
        inputFields={inputFields}
        className={className}
      />
    </BrandFormTag>
  );
};

export default BrandForm;
