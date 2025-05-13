"use client";
import { HomeIcon, LibraryIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomBar = () => {
    const pathname = usePathname();
  const menuItems = [
    {
      label: "Home",
      icon: <HomeIcon className="w-5 h-5 stroke-2" />,
      href: "/",
    },
    {
      label: "Explore",
      icon: <SearchIcon className="w-5 h-5 stroke-2" />,
      href: "/explore",
    },
    {
      label: "Library",
      icon: <LibraryIcon className="w-5 h-5 stroke-2" />,
      href: "/library",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white w-full md:hidden">
      <div className="flex items-center gap-2">
        {menuItems.map((item) => (
          <Link
            className={`flex flex-col gap-2 items-center justify-center w-full p-2 text-xs ${pathname === item.href ? "opacity-100" : "opacity-50"}`}
            href={item.href}
            key={item.label}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
