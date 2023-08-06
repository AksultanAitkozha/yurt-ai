import Link from 'next/link';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white bg-opacity-10 backdrop-blur-md" style={{ 
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 7px, #ddd1 7px, #ddd1 8px),
                         repeating-linear-gradient(90deg, transparent, transparent 7px, #ddd1 7px, #ddd1 8px)` 
      }}>
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
