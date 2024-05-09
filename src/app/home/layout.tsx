import Sidebar from "@/components/Sidebar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-h-dvh flex flex-row bg-gray-700">
      <Sidebar />
      <section className="m-2 p-5 w-full rounded-md bg-white dark:bg-gray-900">
        {children}
      </section>
    </div>
  )
}

export default HomeLayout;
