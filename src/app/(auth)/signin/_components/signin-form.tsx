"use client";

import { Button } from "@/app/_components/button/button";
import { TextInput } from "@/app/_components/form-input";
import { useNotificationStore } from "@/store/notification.store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSignIn } from "../_api/signin";
import { SignIn } from "../_types/signin.types";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>();

  const router = useRouter();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/verify?mobile${getValues("mobile")}`);
      showNotification({
        message: "کد تایید به شماره شما ارسال شد",
        type: "info",
        duration: 5000,
      });
    },
  });

  const onSubmit = (data: SignIn) => {
    signIn.submit(data);
  };

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput<SignIn>
          register={register}
          name={"mobile"}
          rules={{
            required: "شماره موبایل الزامی است",
            maxLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
            minLength: {
              value: 11,
              message: "شماره موبایل باید 11 رقم باشد",
            },
          }}
          errors={errors}
        />

        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
