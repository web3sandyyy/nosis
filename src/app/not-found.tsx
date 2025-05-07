import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-69px)] flex flex-col items-center justify-center p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Not Found</h2>
      <p className="text-base sm:text-lg text-gray-600 mb-6">
        The requested resource could not be found.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blueAccent text-white rounded-lg hover:bg-blueAccent/90 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
