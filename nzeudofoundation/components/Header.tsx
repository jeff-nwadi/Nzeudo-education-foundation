"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Impact", href: "/impact" },
      { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex items-center justify-between",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
        <Link href="/" className="flex items-center gap-2 z-50 relative">
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">N</div>
            <span className={cn(
                "text-xl font-bold tracking-tight", 
                scrolled || mobileMenuOpen ? "text-gray-900 dark:text-gray-100" : "text-white"
            )}>
                Nzeudo Foundation
            </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
                <Link 
                    key={link.name}
                    href={link.href}
                    className={cn("text-sm font-medium transition-colors hover:text-green-400", scrolled ? "text-gray-600 dark:text-gray-300" : "text-white/90")}
                >
                    {link.name}
                </Link>
            ))}
        </nav>

        <div className="hidden md:block">
            <Link
                href="/donate"
                className="px-5 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors"
            >
                Donate Now
            </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            <div className={cn("w-6 h-0.5 mb-1.5 transition-all duration-300 bg-current", mobileMenuOpen ? "rotate-45 translate-y-2 bg-gray-900 dark:bg-white" : (scrolled ? "bg-gray-900 dark:bg-white" : "bg-white"))} />
            <div className={cn("w-6 h-0.5 mb-1.5 transition-all duration-300 bg-current", mobileMenuOpen ? "opacity-0" : (scrolled ? "bg-gray-900 dark:bg-white" : "bg-white"))} />
            <div className={cn("w-6 h-0.5 transition-all duration-300 bg-current", mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-gray-900 dark:bg-white" : (scrolled ? "bg-gray-900 dark:bg-white" : "bg-white"))} />
        </button>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        <div className={cn(
            "fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 overflow-y-auto transition-all duration-500 ease-in-out md:hidden",
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}>
            <div className="min-h-full flex flex-col items-center justify-center gap-8 py-20">
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map(link => (
                        <Link 
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <Link
                    href="/donate"
                    className="px-8 py-4 rounded-full bg-green-600 text-white text-lg font-bold hover:bg-green-700 transition-colors "
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Donate Now
                </Link>
            </div>
        </div>
    </header>
  );
};

export default Header;
