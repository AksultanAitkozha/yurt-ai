import Link from 'next/link';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white bg-opacity-10 backdrop-blur-md">
      <div className="text-2xl font-semibold font-inter">Yurt.ai</div>
      <nav className="space-x-4">
      <Link href="/" className="font-inter text-lg">
            About Us
        </Link>
        <Link href="/login" className="font-inter text-lg">
            Log In
        </Link>
    </nav>
    </header>
  );
}

export default Header;
