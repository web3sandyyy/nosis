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

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-end p-4 bg-primary gap-6 shadow-sm  sticky top-0">
      <div className="bg-white rounded-md flex items-center px-2 w-3/5 max-w-[350px]">
        <Search className="w-5 h-5 text-black/50" />
        <input
          type="text"
          placeholder="Search for books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" p-1 placeholder:text-black/70 placeholder:text-sm placeholder:font-medium focus:outline-none w-full"
        />
        <X
          className={`w-5 h-5 text-black ${
            search ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="bg-white">
            <span className="text-black/50">
              <Languages className="w-5 h-5" />
            </span>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <button className="p-1 text-sm font-medium rounded-md text-white px-4 bg-blueAccent hover:bg-blueAccent/80">
          Sign In
        </button>
      </div>

      {/* <div>
        <Select>
          <SelectTrigger className="bg-white">
           <div className="p-2 rounded-full bg-blueAccent">
            <User className="w-5 h-5 text-white" />
           </div>
          </SelectTrigger>


          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
    </div>
  );
};

export default Header;
