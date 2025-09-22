"use client";

import { AuthCode } from "@/app/_components/auth-code";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
import { Button } from "@/app/_components/button/button";
import { Timer } from "@/app/_components/timer";
import { TimerRef } from "@/app/_components/timer/timer.types";
import Link from "next/link";
import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
// import { useSendAuthCode } from "../_api/send-auth-code";
import { sendAuthCode, verify } from "@/_actions/auth";
import { useNotificationStore } from "@/store/notification.store";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { VerifyUserModel } from "../_types/verify-user.types";
import { getSession } from "next-auth/react";

const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  return time;
};

const VerificationForm = ({ mobile }: { mobile: string }) => {
  const [showResendCode, setShowResendCode] = useState(false);
  const authCodeRef = useRef<AuthCodeRef>(null);
  const timerRef = useRef<TimerRef>(null);

  const {
    handleSubmit,
    setValue,
    register,
    formState: { isValid },
  } = useForm<VerifyUserModel>();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const [sendAuthCodeState, sendAuthCodeAction] = useActionState(
    sendAuthCode,
    null
  );
  const [verifyState, verifyAction] = useActionState(verify, undefined);

  const [verifyPendingState, startTransition] = useTransition();

  const router = useRouter();

  const params = useSearchParams();
  const username = params.get("mobile")!;

  useEffect(() => {
    if (verifyState && !verifyState.isSuccess && verifyState?.error?.detail) {
      showNotification({
        message: verifyState.error.detail,
        type: "error",
        duration: 5000,
      });
    } else if (verifyState?.isSuccess) {
      const fetchSession = async () => await getSession();
      fetchSession();
      router.push("/student/courses");
    }
  });

  useEffect(() => {
    if (
      sendAuthCodeState &&
      !sendAuthCodeState.isSuccess &&
      sendAuthCodeState.error
    ) {
      showNotification({
        type: "error",
        message: sendAuthCodeState.error.detail!,
        duration: 5000,
      });
    } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
      console.log(sendAuthCodeState.response);
      showNotification({
        type: "info",
        message: "کد تایید به شماره شما ارسال شد",
        duration: 5000,
      });
    }
  }, [sendAuthCodeState, showNotification]);

  // const sendAuthCode = useSendAuthCode({
  //   onSuccess: () => {
  //     showNotification({
  //       type: "info",
  //       message: "کد تایید به شماره شما ارسال شد",
  //       duration: 5000,
  //     });
  //   },
  // });

  const onSubmit = (data: VerifyUserModel) => {
    data.username = username;

    startTransition(async () => {
      verifyAction({
        username: data.username,
        code: data.code,
      });
    });
  };

  register("code", {
    validate: (value: string) => (value ?? "").length === 5,
  });

  const resendAuthCode = () => {
    timerRef.current?.restart(getTwoMinutesFromNow());
    setShowResendCode(false);
    // sendAuthCode.submit(username);
    authCodeRef.current?.clear();
    sendAuthCodeAction(mobile);
  };

  return (
    <>
      <h5 className="text-2xl">کد تایید</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-10 flex-1"
      >
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            setValue("code", value, { shouldValidate: true });
          }}
        />
        <Timer
          ref={timerRef}
          className="my-8"
          size="small"
          onExpire={() => {
            setShowResendCode(true);
          }}
          expiryTimestamp={getTwoMinutesFromNow()}
          showDays={false}
          showHours={false}
        />
        <Button
          isLink={true}
          isDisabled={!showResendCode}
          onClick={resendAuthCode}
        >
          ارسال مجدد کد تایید
        </Button>
        <Button
          type="submit"
          variant="primary"
          isLoading={verifyPendingState}
          isDisabled={!isValid}
        >
          تایید و ادامه
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>برای اصلاح شماره موبایل</span>
          <Link href="/signin">اینجا</Link>
          <span>کلیک کنید</span>
        </div>
      </form>
    </>
  );
};

export default VerificationForm;
