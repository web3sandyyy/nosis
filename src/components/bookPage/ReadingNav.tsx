import React from "react";
import { Settings2, ArrowLeft, Languages } from "lucide-react";
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

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href={`/book/${bookSlug}`}>
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div>
          <p>{book.title}</p>
          <p className="text-sm text-black/50 mt-2">
            <span>{book.author}</span> <span>{book.time} mins</span>
          </p>
        </div>
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
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue={String(currentIndex)}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder={`Part ${currentIndex + 1}`} />
          </SelectTrigger>
          <SelectContent>
            {book.contents.map((part, idx) => (
              <SelectItem key={idx} value={String(idx)}>
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
  );
};

export default ReadingNav;
