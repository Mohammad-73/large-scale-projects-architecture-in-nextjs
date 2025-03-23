import VerificationForm from "./_components/verification-form";

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mobile = (await searchParams["mobile"]) as string;

  return <VerificationForm mobile={mobile} />;
  // return <VerificationForm mobile={searchParams["mobile"] as string} />;
}
