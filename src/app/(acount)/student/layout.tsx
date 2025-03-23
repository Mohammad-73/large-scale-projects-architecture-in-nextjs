import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function StudentLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/signin");
  }

  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center self-stretch text-3xl">
        Student Sidebar
      </aside>
      <main className="flex justify-center items-center flex-1 text-5xl">
        {children}
      </main>
    </>
  );
}
