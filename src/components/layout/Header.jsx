"use client";
import React, { useState, useRef } from "react";
// Import the necessary assets, components, and hooks
import { FaWallet, FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import the wallet icon
import { navigation } from "@/constants"; // Replace with your navigation constants
import { Button } from "../ui/Button";
import { useEffect } from "react";

function useOutsideAlerter(refs, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      const isClickOutside = Object.keys(refs).some((key) => {
        const ref = refs[key];
        return ref.current && !ref.current.contains(event.target);
      });

      if (isClickOutside) {
        onOutsideClick();
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, onOutsideClick]);
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  // Create a ref for each dropdown item
  const dropdownRefs = navigation.filter(item => item.dropdown).reduce((acc, item) => {
    acc[item.id] = useRef();
    return acc;
  }, {});
  useOutsideAlerter(dropdownRefs, () => setDropdownOpen({}));

  

  
  
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    // Depending on your implementation, you may need to handle scroll locking
  };
  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const closeDropdowns = () => {
    setDropdownOpen({});
  };
  // Close dropdown if click outside

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-darker-blue/90 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="flex items-center">
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#f8a45b] from-20%  to-[#fcd460] inline-block text-transparent bg-clip-text">
            Spiritual-NFT
          </span>
        </a>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-orbitron text-sm">
          {navigation.map((item) => (
            <div
              key={item.id}
              className="relative"
              ref={item.dropdown ? dropdownRefs[item.id] : null}
            >
              <button
                onClick={() => item.dropdown && toggleDropdown(item.id)}
                className=" inline-flex items-center"
              >
                <span className="hover:bg-gradient-to-r from-[#f8a45b] from-20% to-[#fcd460] hover:text-transparent  hover:font-semibold hover:bg-clip-text">
                  {item.title}
                </span>
                {item.dropdown &&
                  (dropdownOpen[item.id] ? (
                    <FaCaretUp className="ml-1 " />
                  ) : (
                    <FaCaretDown className="ml-1" />
                  ))}
              </button>
              {item.dropdown && dropdownOpen[item.id] && (
                <div className="absolute bg-darker-blue/90 text-white shadow-md mt-1 rounded">
                  <nav className="flex flex-col">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.id}
                        href={dropdownItem.url}
                        className="hover:bg-gradient-to-r from-[#f8a45b] from-20% to-[#fcd460] hover:text-transparent  hover:font-semibold hover:bg-clip-text py-2 px-4 block"
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavigation} className="md:hidden">
          <span className="text-3xl">☰</span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-darker-blue/90 md:hidden">
            <nav className="flex flex-col items-center">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="hover:bg-gradient-to-r from-[#f8a45b] from-20% to-[#fcd460] hover:text-transparent  hover:font-semibold hover:bg-clip-text py-2"
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
