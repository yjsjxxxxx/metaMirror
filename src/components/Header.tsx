
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import ApplicationsMenu from './ApplicationsMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeMenu ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="iMotions"
            className="h-6 w-auto"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-16">
          <button onMouseEnter={() => setActiveMenu('products')}
            className={`text-sm font-bold flex items-center gap-1 py-4 transition-colors cu ${activeMenu === 'products' ? 'text-[#37626F]' : 'hover:text-primary'}`} >
            产品<ChevronDown size={14} className={`transition-transform ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
          </button>
          <button onMouseEnter={() => setActiveMenu('applications')}
            className={`text-sm font-bold flex items-center gap-1 py-4 transition-colors ${activeMenu === 'applications' ? 'text-[#37626F]' : 'hover:text-primary'}`}>
            应用<ChevronDown size={14} className={`transition-transform ${activeMenu === 'applications' ? 'rotate-180' : ''}`} />
          </button>
          {/* <button className="text-sm font-medium hover:text-primary flex items-center gap-1">关于我们 </button> */}
          <a href="/about" className="text-sm font-medium hover:text-primary">关于我们</a>
          <a href="/contact" className="text-sm font-medium hover:text-primary">联系我们</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-primary">
            {/* <Search size={20} /> */}
          </button>
        </div>
      </div>
      {/* Mega Menu */}
      {activeMenu === 'products' && (
        <div
          onMouseEnter={() => setActiveMenu('products')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <MegaMenu />
        </div>
      )}
      {/* Mega Menu - Applications */}
      {activeMenu === 'applications' && (
        <div
          onMouseEnter={() => setActiveMenu('applications')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <ApplicationsMenu />
        </div>
      )}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <button className="text-sm font-medium hover:text-primary flex items-center gap-1">产品 </button>
          <button className="text-sm font-medium hover:text-primary flex items-center gap-1">应用 </button>
          <button className="text-sm font-medium hover:text-primary flex items-center gap-1">关于我们 </button>
          <a href="#" className="text-sm font-medium hover:text-primary">联系我们</a>
        </div>
      )}
    </header>
  );
}
