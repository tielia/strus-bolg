export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <div className="">
        {children}
      </div>
    </section>
  );
}
