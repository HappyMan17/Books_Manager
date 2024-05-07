import Sidebar from "@/components/Sidebar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen flex flex-row overflow-hidden bg-gray-700">
      <Sidebar />
      <section className="m-2 p-5 w-full rounded-md bg-white dark:bg-gray-900">
        {children}
      </section>
    </div>
  )
}

export default HomeLayout;
