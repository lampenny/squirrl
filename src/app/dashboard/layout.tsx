import Navbar from '@/app/ui/dashboard/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-lime-700 flex flex-col md:overflow-hidden">
      <div className="md:px-20 md:py-5 p-4">
        <Navbar />
      </div>
      <div className="grow p-4 md:overflow-y-auto md:px-20 md:py-5">
        {children}
      </div>
    </div>
  )
}
