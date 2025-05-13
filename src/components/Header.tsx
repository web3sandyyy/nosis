"use client";
import React, { useState } from "react";
import { Search, X, Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.svg";

// Header component with search, language selector and sign-in button
// Hides when on reading pages
const Header = () => {
  // State for search input
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  return (
    <div
      className={`flex justify-between items-center md:justify-end p-2 md:p-4  bg-primary gap-6 shadow-sm  z-50 sticky top-0 ${
        pathname.includes("reading") ? "hidden" : ""
      }`}
    >
      {/* Logo shown only on mobile */}
      <Image
        src={logo}
        alt="Nosis logo"
        width={100}
        height={20}
        className="w-fit h-6 md:hidden"
      />
      {/* Search bar with icon and clear button */}
      <div className="bg-white rounded-md flex items-center px-2 w-3/5 max-w-[350px]">
        <Search className="w-5 h-5 text-black/50" aria-hidden="true" />
        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" p-1 placeholder:text-black/70 placeholder:text-sm placeholder:font-medium focus:outline-none w-full"
          aria-label="Search for books"
        />
        <X
          className={`w-5 h-5 text-black ${
            search ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Right side controls: language selector and sign-in button */}
      <div className="gap-4 flex ">
        {/* Language selector dropdown (hidden on mobile) */}
        <div className="hidden sm:block">
          <Select>
            <SelectTrigger className="bg-white" aria-label="Select language">
              <span className="text-black/50">
                <Languages className="w-5 h-5" aria-hidden="true" />
              </span>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">English</SelectItem>
              <SelectItem value="dark">Hindi</SelectItem>
              <SelectItem value="system">Bahasa Indonesia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sign in button */}
        <button
          className="p-1 text-sm font-medium rounded-md text-white px-4 bg-blueAccent hover:bg-blueAccent/80 whitespace-nowrap"
          aria-label="Sign in to your account"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
