import DropdownComponent from "@/components/DropdownComponent";
import ArrowDownIcon from "@/icons/ArrowDownIcon";
import SearchIcon from "@/icons/SearchIcon";
import { Button } from "@nextui-org/button";

const searchOptions = ["Author", "Title"];

export default function SearchPage() {
  return (
    <div className="h-full w-full dark:text-white">
      <section className="flex flex-col justify-center items-center gap-2 py-5 px-2 mb-3 border border-white rounded-sm">
        <h1 className="text-5xl font-bold"> Search A Book </h1>
        <p> Choose if your looking for the Title or the Author </p>
        {/* Make a component with it */}
        <div className="h-[40px] max-w-[500px] w-full flex flex-row rounded-md border border-gray-500 overflow-hidden">
          <div className="rounded-md">
            <DropdownComponent
            items={searchOptions}
            title={searchOptions[0]}
            icon={<ArrowDownIcon />}
            buttonProps="w-[60px] md:w-full bg-indigo-500"/>
          </div>
          <input
            type="text"
            placeholder="Search for a book"
            className="h-full w-full md:w-full rounded-sm px-5"
          />
          <button className="h-full flex justify-center items-center w-[40px] bg-indigo-500">
            <SearchIcon />
          </button>
        </div>
      </section>
      <section className="border border-white rounded-sm">
        <h1> books </h1>
      </section>
    </div>
  )
}
