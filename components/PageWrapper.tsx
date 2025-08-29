export default function PageWrapper({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pl-[calc(var(--sidebar-width)+4vh)] pr-[4vh] py-[var(--main-padding-y)]">
        {children}
      </div>{" "}
    </div>
  );
}
