export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className="text-5xl flex justify-center items-center">
      <h1>{slug}</h1>
    </div>
  );
}
