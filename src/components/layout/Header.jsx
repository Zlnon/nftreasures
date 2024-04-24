"use client";
import React, { useState } from "react";
// Import the necessary assets, components, and hooks
import { FaWallet } from "react-icons/fa"; // Import the wallet icon
import { navigation } from "@/constants"; // Replace with your navigation constants
import { Button } from "../ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    // Depending on your implementation, you may need to handle scroll locking
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-darker-blue/90 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center">
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#f8a45b] from-20%  to-[#fcd460] inline-block text-transparent bg-clip-text">
            Spiritual-NFT
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <a key={item.id} href={item.url} className="hover:underline">
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavigation} className="md:hidden">
          <span className="text-3xl">☰</span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black md:hidden">
            <nav className="flex flex-col items-center">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="hover:underline py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Wallet Connect Button */}
        <Button className="hidden md:flex items-center py-2">
          Wallet Connect <FaWallet className="ml-2" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
