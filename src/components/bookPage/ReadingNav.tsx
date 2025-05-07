import React from 'react'
import { Settings2, ArrowLeft, Languages } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const ReadingNav = () => {
  return (
    <div className="flex justify-between items-center p-4">
    <div className="flex items-center gap-4">
      <ArrowLeft className="w-4 h-4" />

      <div>
        <p>
          The Blue Zones Solution: Eating and Living Like the World's
          Healthiest People
        </p>
        <p className="text-sm text-black/50 mt-2">
          <span>Dan Buettner</span> <span>100 mins</span>
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
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Part 1" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <button className="bg-blueAccent text-white px-4 py-2  text-sm h-fit rounded-md flex items-center gap-2">
        <Settings2 className="w-4 h-4" /> Customize
      </button>
    </div>
  </div>
  )
}

export default ReadingNav