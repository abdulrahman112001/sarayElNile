import Image from "next/image";
import Logo from "../../../../public/assets/srayaLogo.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiGlobe } from "react-icons/ci";

type HeaderProps_TP = {
  header: string;
  className?: string;
};

export const Header = ({ header, className }: HeaderProps_TP) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  return (
    <header
      className={`fixed top-0 w-full shadow-md font-sans tracking-wide z-50 ${className} sm:px-16 px-0 bg-white`}
    >
      <div className="flex items-center justify-between px-4 py-2 min-h-[50px]">
        <Link href="/">
          <Image src={Logo} height={40} width={130} alt="Logo" className="" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-[#945E13] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`lg:flex lg:items-center lg:justify-center lg:flex-1 ${
            isMenuOpen
              ? "flex flex-col items-center space-y-4 fixed inset-y-0 right-0 z-50 bg-white p-6 w-[50%] max-w-sm mx-auto rounded-lg"
              : "hidden"
          }`}
        >
          {/* Close Button in Mobile Menu */}
          <button
            className="self-end lg:hidden text-[#945E13] focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-5 lg:space-y-0">
            <li>
              <Link
                href="/"
                className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                  router.pathname === "/explore"
                    ? "bg-[#e6af62] text-white"
                    : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                }`}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/top-packages"
                className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                  router.pathname === "/top-packages"
                    ? "bg-[#e6af62] text-white"
                    : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                }`}
              >
                Top Packages
              </Link>
            </li>
            <li>
              <Link
                href="/top-excursions"
                className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                  router.pathname === "/top-excursions"
                    ? "bg-[#e6af62] text-white"
                    : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                }`}
              >
                Top Excursions
              </Link>
            </li>
            <li>
              <Link
                href="/nile-cruises"
                className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                  router.pathname === "/nile-cruises"
                    ? "bg-[#e6af62] text-white"
                    : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                }`}
              >
                Nile Cruises
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded ${
                  router.pathname === "/blogs"
                    ? "bg-[#e6af62] text-white"
                    : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                }`}
              >
                Blogs
              </Link>
            </li>
          </ul>

          {/* Earth Icon for Language Change (Inside Modal) */}
          <div className="flex items-center lg:hidden">
            <button
              className="text-black focus:outline-none mt-4"
              onClick={handleLanguageChange}
              title="Change Language"
            >
              <CiGlobe size={30} />
            </button>
          </div>
        </div>

        {/* Earth Icon for Language Change (Desktop Only) */}
        <div className="hidden lg:flex items-center">
          <button
            className="text-black focus:outline-none ml-4 mt-2"
            onClick={handleLanguageChange}
            title="Change Language"
          >
            <CiGlobe size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};
