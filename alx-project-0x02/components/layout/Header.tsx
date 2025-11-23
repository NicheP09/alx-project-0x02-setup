import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-gray-100 p-4 shadow-sm">
      <nav className="flex gap-6 items-center">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <Link href="/home" className="text-blue-600 hover:underline">
          Home Page
        </Link>

        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
