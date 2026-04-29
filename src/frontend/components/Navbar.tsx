"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Briefcase, User, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { name: "Search Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Career Advice", href: "/career-advice" },
    { name: "Blog", href: "/blog" },
  ];

  if ((session?.user as any)?.role === "recruiter") {
    navLinks.push({ name: "Post a Job", href: "/admin/jobs/create" });
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-xl flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              JobPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-white/5 transition-all"
                >
                  <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                    <User size={18} />
                  </div>
                  <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-card border border-white/10 rounded-xl shadow-2xl py-2"
                    >
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-white hover:bg-white/5"
                      >
                        <User size={16} className="mr-3 text-muted-foreground" /> My Profile
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center px-4 py-2 text-sm text-destructive hover:bg-destructive/10"
                      >
                        <LogOut size={16} className="mr-3" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <Link
                  href="/login"
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-white/5"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {!session && (
                <div className="pt-4 space-y-3 px-2">
                  <Link
                    href="/login"
                    className="block w-full text-center px-4 py-3 rounded-xl border border-white/10 font-medium text-white hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center px-4 py-3 rounded-xl bg-primary font-medium text-white shadow-lg shadow-primary/25"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
