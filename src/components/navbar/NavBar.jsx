import { useState } from 'react';
import logo from '../../assets/logos/logo1.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-17.5 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 text-gray-700 transition-all">
      {/* Logo */}
      {/* <a href={logo} className="text-green-600">
        <svg width="157" height="40" viewBox="0 0 157 40" fill="none"></svg>
      </a> */}
      <img src={logo} alt="connect2roots foundation" className="w-20" />

      {/* Desktop Nav */}
      <ul className="md:flex hidden text-neutral-900 items-center gap-10">
        <li>
          <a className="hover:text-neutral-500/80 transition" href="#">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-neutral-500/80 transition" href="#">
            Get Involved
          </a>
        </li>
        <li>
          <a className="hover:text-neutral-500/80 transition" href="#">
            Mentoring App
          </a>
        </li>
        <li>
          <a className="hover:text-neutral-500/80 transition" href="#">
            Impact
          </a>
        </li>
        <li>
          <a className="hover:text-neutral-500/80 transition" href="#">
            Resources
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="bg-green-600 text-neutral-100 rounded-xl md:inline hidden text-sm hover:bg-green-700 active:scale-95 transition-all w-40 h-11"
      >
        Donate
      </button>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="inline-block md:hidden active:scale-90 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 L 27 7 M 3 14 L 27 14 M 3 21 L 27 21" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-17.5 left-0 w-full bg-white p-6 md:hidden transition-all ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li>
            <a href="#" className="text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Get Involved
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Mentoring App
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Impact
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Resources
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-sm"
        >
          Donate
        </button>
      </div>
    </nav>
  );
}
