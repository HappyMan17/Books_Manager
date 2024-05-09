'use client'

import ArrowDownIcon from "@/icons/ArrowDownIcon";
import DropdownComponent from "./DropdownComponent";
import SearchIcon from "@/icons/SearchIcon";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const filterOptions: Record<string, string> = {
  "Title": "q",
  "Author": "author",
  "q": "Title",
  "author": "Author"
};

interface SearchBarProps {
  searchOptions: string[];
}

const SearchBar = ({ searchOptions }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const filter = searchParams.get('filter')?.toString();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const handleDropdownSelection = (item: string) => {
    const params = new URLSearchParams(searchParams);
    if (item) {
      params.set("filter", filterOptions[item]);
    } else {
      params.delete("filter");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="h-[40px] max-w-[500px] w-full flex flex-row rounded-md border border-gray-500 overflow-hidden">
      <div className="rounded-md">
        <DropdownComponent
        items={searchOptions}
        title={filter ? filterOptions[filter] : searchOptions[0]}
        icon={<ArrowDownIcon />}
        buttonProps="w-[60px] md:w-full bg-indigo-500"
        onChangeSelection={handleDropdownSelection} />
      </div>
      <input
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={ (e) => handleSearch(e.target.value)}
        placeholder="Search for a book"
        className="h-full w-full md:w-full rounded-sm px-5"
      />
      <button className="h-full flex justify-center items-center w-[40px] bg-indigo-500">
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar;
