import books from '@/constants/books'
import { Bookmark, Book, Clock, BookOpen } from 'lucide-react'
import React from 'react'

const BookBanner = ({ book }: { book: typeof books[0] }) => {
  return (
    <div className="flex gap-8 px-8 pb-12 ">
    <img
      src={decodeURIComponent(book.image)}
      alt={book.title}
      className="max-w-[200px] object-cover rounded-lg shadow-md"
    />

    <div className=" min-h-full flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-2 leading-tight">
          {book.title}
        </h1>
        <div className="text-lg text-black/50 mb-2">{book.author}</div>
        <div className="flex items-center gap-4 text-sm text-black/50 mb-4">
          <span className="flex items-center gap-2">
            <Book className="w-4 h-4" />
            {book.parts} parts
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {book.time} mins
          </span>
        </div>
        <div className="flex gap-2 mb-4">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="bg-black/5 text-blueAccent px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="bg-blueAccent text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blueAccent/90 flex items-center gap-2">
          Read <BookOpen className="w-4 h-4" />
        </button>
        <button className="border border-gray-300 px-6 py-3 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-100 flex items-center gap-2">
          Bookmark <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>        
  )
}

export default BookBanner