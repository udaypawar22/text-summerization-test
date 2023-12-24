"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const options = [
  {
    key: "lightmode",
    label: "light",
  },
  {
    key: "darkmode",
    label: "dark",
  },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{theme}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={options}>
        {(option) => (
          <DropdownItem key={option.key} onClick={() => setTheme(option.label)}>
            {option.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
