export default function WalletLayout({
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
