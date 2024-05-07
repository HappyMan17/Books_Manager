'use client'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import ArrowDownIcon from "@/icons/ArrowDownIcon";

interface props {
  items: string[];
  title: string;
  buttonProps?: string;
  icon: any;
}

const DropdownComponent = ({ items, title, icon, buttonProps = '' }: props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className={buttonProps}
          radius="none"
        >
          { title } 
          {icon && (
            icon
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="dark:bg-black rounded-lg p-2">
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() => alert(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownComponent;
