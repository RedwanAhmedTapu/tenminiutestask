import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="text-2xl font-bold text-blue-600">
          10 Minute School
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href={`/${lang}/courses`} className="text-gray-700 hover:text-blue-600">
            Courses
          </Link>
          <Link href={`/${lang}/about`} className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;