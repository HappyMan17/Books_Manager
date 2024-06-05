'use client'
import { useDebouncedCallback } from "use-debounce";

import ArrowDownIcon from "@/icons/ArrowDownIcon";
import DropdownComponent from "./DropdownComponent";
import SearchIcon from "@/icons/SearchIcon";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import k from "@/lib/constants";

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
  const [dropdownSelected, setdropdownSelected] = useState('')
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  
  const params = new URLSearchParams(searchParams);
  const filter = searchParams.get('filter')?.toString();

  if (!params.get("filter")) {
    params.set("filter", filterOptions["Author"])
  }

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      params.set("query", term);
      params.set("page", k.INIT_PAGE.toString());
      params.set("limit", k.INIT_LIMIT.toString());
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  const handleDropdownSelection = (item: string) => {
    if (item) {
      params.set("filter", filterOptions[item]);
      setdropdownSelected(item);
    } else {
      params.delete("filter");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    setdropdownSelected(filter ? filterOptions[filter] : searchOptions[0])
  }, [])

  return (
    <div className="h-[40px] max-w-[500px] w-full flex flex-row rounded-md border border-gray-500 overflow-hidden">
      <div className="rounded-md">
        <DropdownComponent
        items={searchOptions}
        title={dropdownSelected}
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
