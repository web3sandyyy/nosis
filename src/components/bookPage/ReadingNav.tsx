"use client";
import React, { useState } from "react";
import { Settings2, ArrowLeft, Languages, Menu, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { generateSlug } from "@/helper";

interface ReadingNavProps {
  book: {
    title: string;
    author: string;
    time: number;
    contents: { name: string; data: string }[];
  };
  currentIndex: number;
}

const ReadingNav = ({ book, currentIndex }: ReadingNavProps) => {
  const bookSlug = generateSlug(book.title);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Link href={`/book/${bookSlug}`}>
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <p className="font-medium">{book.title}</p>
            <p className="text-sm text-black/50 mt-1">
              <span>{book.author}</span>{" "}
              <span className="ml-2">{book.time} mins</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="bg-white w-[110px]">
              <span className="text-black/50">
                <Languages className="w-5 h-5" />
              </span>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="max-w-[180px]">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={String(currentIndex)}>
            <SelectTrigger className="bg-white w-[150px]">
              <SelectValue placeholder={`Part ${currentIndex + 1}`} />
            </SelectTrigger>
            <SelectContent className="max-w-[250px]">
              {book.contents.map((part, idx) => (
                <SelectItem key={idx} value={String(idx)} className="truncate">
                  Part {idx + 1}: {part.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button className="bg-blueAccent text-white px-4 py-2 text-sm h-fit rounded-md flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> Customize
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <Link href={`/book/${bookSlug}`}>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <p className="text-sm font-medium truncate max-w-[180px]">
              {book.title}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Select defaultValue={String(currentIndex)}>
              <SelectTrigger className="bg-white h-8 text-xs min-w-0 w-[80px] px-2">
                <SelectValue placeholder={`Part ${currentIndex + 1}`} />
              </SelectTrigger>
              <SelectContent
                side="bottom"
                position="popper"
                align="end"
                className="max-w-[200px] w-[200px] z-50"
              >
                {book.contents.map((part, idx) => (
                  <SelectItem
                    key={idx}
                    value={String(idx)}
                    className="text-xs truncate"
                  >
                    Part {idx + 1}: {part.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="p-3 border-t bg-gray-50 flex flex-col gap-2">
            <p className="text-xs text-black/50">
              <span>{book.author}</span> • <span>{book.time} mins</span>
            </p>

            <div className="flex gap-2 mt-1">
              <Select>
                <SelectTrigger className="bg-white h-8 text-xs flex-1">
                  <Languages className="w-3 h-3 mr-1" />
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent align="start" className="w-[120px] z-50">
                  <SelectItem value="en" className="text-xs">
                    English
                  </SelectItem>
                  <SelectItem value="es" className="text-xs">
                    Spanish
                  </SelectItem>
                  <SelectItem value="fr" className="text-xs">
                    French
                  </SelectItem>
                </SelectContent>
              </Select>

              <button className="bg-blueAccent text-white px-2 py-1 text-xs h-8 rounded-md flex items-center gap-1">
                <Settings2 className="w-3 h-3" /> Customize
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingNav;
