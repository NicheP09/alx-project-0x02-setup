import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-50 dark:bg-gray-800 p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          MyApp
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/home"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
