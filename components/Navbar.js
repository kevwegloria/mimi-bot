import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const Navbar = ({ searchTerm, setSearchTerm }) => (
  <nav className="bg-orange-500 p-4 flex justify-between items-center">
    <Link href="/" className="text-white text-xl font-bold">EzyBuy</Link>
    <div className="flex items-center space-x-4 bg-transparent">
      {/* Search bar inside the navbar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="border p-2 w-64 rounded bg-white placeholder-grey"
      />
      <Link href="/cart" className="text-white flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

        <span>Cart</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
