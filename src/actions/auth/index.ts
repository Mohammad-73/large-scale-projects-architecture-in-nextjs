"use server";

import { signInSchema } from "@/app/(auth)/signin/_types/signin.schema";
import { redirect } from "next/navigation";

export async function signInAction(mobile: string) {
  const validateData = signInSchema.safeParse({
    mobile,
  });

  if (!validateData.success) {
    console.log("error");
  } else {
    console.log(mobile);
    redirect("/");
  }
}
