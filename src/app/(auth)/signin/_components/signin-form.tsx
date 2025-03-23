"use client";

import { Button } from "@/app/_components/button/button";
import { TextInput } from "@/app/_components/form-input";
import { useNotificationStore } from "@/store/notification.store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
// import { useSignIn } from "../_api/signin";
import { signInAction } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useTransition } from "react";
import { signInSchema } from "../_types/signin.schema";
import { SignIn } from "../_types/signin.types";
// import { Alert } from "@/app/_components/alert";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  });

  const [formState, action] = useActionState(signInAction, null);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  useEffect(() => {
    if (formState && !formState.isSuccess && formState.error) {
      showNotification({
        message: formState.error.detail!,
        type: "error",
        duration: 5000,
      });
    } else if (formState && formState.isSuccess) {
      router.push(`/verify?mobile=${getValues("mobile")}`);
      showNotification({
        message: "کد تایید به شماره شما ارسال شد",
        type: "info",
        duration: 5000,
      });
      console.log(formState.response);
    }
  }, [formState, showNotification, router, getValues]);

  // // WITHOUT SERVER ACTION
  // const signIn = useSignIn({
  //   onSuccess: () => {
  //     router.push(`/verify?mobile${getValues("mobile")}`);
  //     showNotification({
  //       message: "کد تایید به شماره شما ارسال شد",
  //       type: "info",
  //       duration: 5000,
  //     });
  //   },
  // });

  const onSubmit = (data: SignIn) => {
    const formData = new FormData();
    formData.append("mobile", data.mobile);
    startTransition(async () => {
      await action(formData);
    });

    // // WITHOUT SERVER ACTION
    // signIn.submit(data);
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
          errors={errors}
        />

        <Button type="submit" variant="primary" isLoading={isPending}>
          تایید و دریافت کد
        </Button>
        {/* {formState.message && (
          <Alert variant="error">{formState.message}</Alert>
        )} */}
      </form>
    </>
  );
};

export default SignInForm;
