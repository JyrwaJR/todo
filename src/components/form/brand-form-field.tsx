import { Input } from "@components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  Form,
} from "@src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { BrandFormFieldType } from "./brand-form-field-type";
import { twMerge } from "tailwind-merge";
import { DialogFooter } from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";
import {
  SelectFieldPlaceHolderMessage,
  TextFieldPlaceHolderMessage,
} from "@src/config";
import { Textarea } from "../ui/textarea";

type OptionsT = {
  label: string;
  value: string | number | boolean;
};
type BrandFormProps<T> = {
  form: UseFormReturn<T | any>;
  defaultValue: T | any;
  loading: boolean;
  inputFields: BrandFormFieldType[];
  className?: string;
};

const BrandFormField = <T,>({
  form,
  defaultValue,
  loading = false,
  inputFields,
  className,
}: BrandFormProps<T>) => {
  const defaultStyles =
    "grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4";
  const style = twMerge(defaultStyles, className);
  return (
    <div className={style}>
      {!loading ? (
        <React.Fragment>
          {inputFields.map((input: any, i) => (
            <div key={i} className='w-full'>
              <FormField
                shouldUnregister
                name={input.name}
                control={form.control}
                defaultValue={defaultValue?.[input.name]}
                render={({ field }) => (
                  <div className='w-full'>
                    {input.select ? (
                      <FormItem className='w-full'>
                        <FormLabel>
                          {input.label}{" "}
                          {input.required && (
                            <span className='text-red-500'>*</span>
                          )}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={defaultValue?.[input.name]}
                          value={field.value}
                        >
                          <FormControl className='w-full'>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={SelectFieldPlaceHolderMessage}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {input.options?.map(
                              (option: OptionsT, i: number) => (
                                <React.Fragment key={i}>
                                  <SelectItem value={option.value as string}>
                                    {option.label}
                                  </SelectItem>
                                </React.Fragment>
                              )
                            )}
                          </SelectContent>
                          <FormMessage />
                          <FormDescription>{input.helperText}</FormDescription>
                        </Select>
                      </FormItem>
                    ) : (
                      <>
                        {input.type === "date" ? (
                          <React.Fragment key={i}>
                            <FormItem className='w-full'>
                              <FormLabel>
                                {input.label}{" "}
                                {input.required && (
                                  <span className='text-red-500'>*</span>
                                )}
                              </FormLabel>
                              <Input
                                {...field}
                                className='w-full'
                                placeholder={TextFieldPlaceHolderMessage}
                                type={input.type}
                              />
                              <FormDescription>
                                {input.helperText}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          </React.Fragment>
                        ) : (
                          <React.Fragment key={i}>
                            <FormItem className='w-full'>
                              <FormLabel>
                                {input.label}{" "}
                                {input.required && (
                                  <span className='text-red-500'>*</span>
                                )}
                              </FormLabel>
                              {input.type === "textarea" ? (
                                <Textarea {...field} className='w-full' />
                              ) : (
                                <Input
                                  {...field}
                                  className='w-full'
                                  placeholder={TextFieldPlaceHolderMessage}
                                  type={input.type}
                                />
                              )}
                              <FormDescription>
                                {input.helperText}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          </React.Fragment>
                        )}
                      </>
                    )}
                  </div>
                )}
              />
            </div>
          ))}
        </React.Fragment>
      ) : (
        <>
          {inputFields.map((input, i) => (
            <div
              key={i + input.name}
              className='w-full h-12 bg-gray-200 rounded-lg col-span-auto animate-pulse'
            />
          ))}
        </>
      )}
    </div>
  );
};
export default BrandFormField;

type BrandFormTagProps<T> = {
  form: UseFormReturn<T | any>;
  children: React.ReactNode;
  onSubmit: SubmitHandler<T | any>;
  isLoading?: boolean;
  className?: string;
  buttonTitle?: string;
};

export const BrandFormTag = <T,>({
  form,
  children,
  onSubmit,
  className,
  isLoading = false,
  buttonTitle = "Submit",
}: BrandFormTagProps<T>) => {
  const defaultStyles = "space-y-4 p-1";
  const styles = twMerge(defaultStyles, className);
  return (
    <Form {...form}>
      <ScrollArea>
        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles}
        >
          {children}
          <DialogFooter className='py-2 sm:pt-2 md:pt-3 lg:pt-4'>
            <Button
              disabled={!form.formState.isDirty || isLoading}
              type='submit'
            >
              {isLoading ? "Loading" : buttonTitle}
            </Button>
          </DialogFooter>
        </form>
      </ScrollArea>
    </Form>
  );
};
