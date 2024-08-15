import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import Logo from "../../../../public/assets/srayaLogo.png";
import { MobileMenu } from "./MobileMenu";
import { useRouter } from "next/router";

type HeaderProps_TP = {
  header: string;
  className?: string;
};

export const Header = ({ header, className }: HeaderProps_TP) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        setIsScrolled(false);
        setIsFixed(true);
      } else {
        setIsScrolled(true);
      }

      if (window.innerWidth >= 1024) {
        // Apply scroll effect on large screens
        if (scrollTop > lastScrollTop) {
          // User is scrolling down
          setIsFixed(false);
        } else if (scrollTop < lastScrollTop || scrollTop === 0) {
          // User is scrolling up or at the top
          setIsFixed(true);
        }
      } else {
        // Always fixed on mobile devices
        setIsFixed(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    let lastScrollTop = 0;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = () => {
    alert("Language change button clicked!");
  };

  return (
    <>
      <header
        className={`
          ${isFixed ? "fixed" : "relative"}
          bg-white shadow-md top-0 w-full font-sans tracking-wide z-40 sm:px-16 px-4
          transition-transform duration-500 ease-in-out transform ${
            isFixed ? "translate-y-0" : "-translate-y-full"
          } ${className}
        `}
      >
        <div className="flex items-center justify-between  ">
          <Link href="/">
            <div className="">
              <Image
                src={Logo}
                height={20} // Default height for small screens
                width={70} // Default width for small screens
                alt="Logo"
                className="sm:w-[100px] lg:w-[100px]" // Adjust height and width for larger screens
              />
            </div>
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <ul className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-5 lg:space-y-0">
              {[
                { href: "/", label: "Explore" },
                { href: "/top-packages", label: "Top Packages" },
                { href: "/top-excursions", label: "Top Excursions" },
                { href: "/nile-cruises", label: "Nile Cruises" },
                { href: "/blogs", label: "Blogs" },
              ].map(({ href, label }) => (
                <li key={href} onClick={() => setIsMenuOpen(false)}>
                  <Link
                    href={href}
                    className={`block font-segoe font-semibold text-[14px] px-3 py-1 rounded transition-colors duration-300 ${
                      router.pathname === href
                        ? "bg-[#e6af62] text-white"
                        : "text-[#945E13] hover:bg-[#f0e6d6] hover:text-[#e6af62]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Earth Icon for Language Change (Desktop Only) */}
          <div className="hidden lg:flex items-center">
            <button
              className={`focus:outline-none ${
                isScrolled ? "text-[#945E13]" : "text-[#945E13]"
              }`}
              onClick={handleLanguageChange}
              title="Change Language"
            >
              <CiGlobe size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onLanguageChange={handleLanguageChange}
      />
    </>
  );
};
