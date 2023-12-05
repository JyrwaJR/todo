"use client";
import { useAuth } from "@src/context/auth";
import React from "react";
import {
  DialogHeader,
  Dialog,
  DialogDescription,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import BrandForm from "../form/brand-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginModel, LoginModelType } from "@src/models/login-model";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginInputFields } from "@src/libs/form-fields";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTheme } from "next-themes";
import { toast } from "../ui/use-toast";

const LoginModal = () => {
  const { user, login } = useAuth();
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const form = useForm<LoginModelType>({
    resolver: zodResolver(LoginModel),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginModelType> = async (
    data: LoginModelType
  ) => {
    await login({
      email: data.email,
      password: data.password,
    });
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <Dialog open={!user.isLogged}>
      <DialogContent className='max-w-[450px]'>
        <Tabs defaultValue='login' className='w-full pt-4'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='login'>Login</TabsTrigger>
            <TabsTrigger value='register'>Register</TabsTrigger>
          </TabsList>
          <TabsContent value='login' className=''>
            <DialogHeader className='py-4'>
              <DialogTitle className='text-xl capitalize'>Login</DialogTitle>
              <DialogDescription>
                Seem like you are not logged in into the app. Please login to
                continue.
              </DialogDescription>
            </DialogHeader>
            <BrandForm
              form={form}
              onSubmit={onSubmit}
              inputFields={loginInputFields}
              className='grid-cols-1 xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'
            />
          </TabsContent>
          <TabsContent value='register'>
            <DialogHeader className='py-4'>
              <DialogTitle className='text-xl capitalize'>Register</DialogTitle>
              <DialogDescription>
                Your account is not created yet. Please create an account to
                continue.
              </DialogDescription>
            </DialogHeader>
            <BrandForm
              form={form}
              onSubmit={onSubmit}
              inputFields={loginInputFields}
              className='grid-cols-1 gap-4 xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
