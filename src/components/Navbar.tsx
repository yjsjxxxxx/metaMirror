import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

const links = [
  { name: 'Platform', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-teal-600 transition-colors">
              i
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              iMotions
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-1"
              >
                {link.name}
                <ChevronDown className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600">
              Log in
            </a>
            <Button size="sm">Book a Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-900 py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <Button className="w-full">Book a Demo</Button>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
