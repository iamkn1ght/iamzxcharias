// src/components/Header.jsx

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-end h-[64px] bg-[#37332B] items-center px-10">
      <nav>
        {}
        <ul className="flex py-2 space-x-[80px] font-sans list-none">
          <li>
            <Link href="/" className="text-[#D8B577] font-sans py-2.5">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#D8B577] py-2.5">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/music" className="text-[#D8B577] py-2.5">
              MUSIC
            </Link>
          </li>
          <li>
            <Link href="/computer" className="text-[#D8B577] py-2.5">
              COMPUTER
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-accent-primary border-2 border-accent-primary hover:border-font hover:text-accent-secondary rounded-full px-4 py-2 transition duration-300"
            >
              GET IN TOUCH
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
