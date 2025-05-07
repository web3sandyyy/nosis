import ReadingNav from "@/components/bookPage/ReadingNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full w-full bg-primary">
      <ReadingNav />

      {children}
    </div>
  );
};

export default layout;
