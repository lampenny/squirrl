import Header from "@/app/ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex flex-col md:overflow-hidden">
      <div className="md:px-20 md:py-5 p-4">
        <Header />
      </div>
      <div className="grow p-4 md:overflow-y-auto md:px-20 md:py-10">{children}</div>
    </div>
  );
}