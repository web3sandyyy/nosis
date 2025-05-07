import ReadingNav from "@/components/bookPage/ReadingNav";
import React from "react";

// For layouts, we can't directly access route params like in page components
// Instead we'll use a client component to handle this logic
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full w-full bg-primary">
      {/* ReadingNav is rendered in the page component */}
      {children}
    </div>
  );
};

export default layout;
