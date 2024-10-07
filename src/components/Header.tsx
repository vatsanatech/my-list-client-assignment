"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {!isHomePage && (
            <Link href="/" className="mr-4">
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300" />
              <span className="sr-only">Back to Home</span>
            </Link>
          )}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isHomePage ? "Movie Database" : "My List"}
          </h1>
        </div>
        {isHomePage && (
          <Link
            href="/my-list"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            MyList
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
