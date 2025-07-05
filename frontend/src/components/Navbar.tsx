import { Link } from "react-router-dom";
import logoNav from "../assets/img/favicon2.svg";
import React, { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
    // State pour ouvrir/fermer le dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    // State pour burger
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Fonction pour toggle le dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Clique en dehors du dropdown
    useEffect(() => {
        if (!isDropdownOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <nav className="bg-green-800 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logoNav} className="h-8" alt="gnome Logo" />
                        <span className="font-title self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Les Gnomes De Martine
                        </span>
                    </div>
                </Link>
                {/* BURGER */}
                <button
                    onClick={() => setIsNavOpen((prev) => !prev)}
                    type="button"
                    className="bg-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isNavOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                {/* MENU RESPONSIVE */}
                <div
                    className={`${isNavOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        {/* Accueil */}
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                Accueil
                            </Link>
                        </li>
                        {/* À propos */}
                        <li>
                            <Link to="/about" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                À propos
                            </Link>
                        </li>
                        {/* Atelier */}
                        <li>
                            <Link to="/workshop" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                Atelier
                            </Link>
                        </li>
                        {/* Gallerie Dropdown */}
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                                aria-expanded={isDropdownOpen}
                                aria-controls="dropdownNavbar"
                                id="dropdownNavbarLink"
                                type="button"
                            >
                                Gallerie
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            <div
                                id="dropdownNavbar"
                                className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-0 top-full mt-2 ${
                                    isDropdownOpen ? '' : 'hidden'
                                }`}
                                aria-labelledby="dropdownNavbarLink"
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Earnings
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* Media */}
                        <li>
                            <Link to="/media" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                Media
                            </Link>
                        </li>
                        {/* Evenements */}
                        <li>
                            <Link to="/news" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                Evenements
                            </Link>
                        </li>
                        {/* Contact */}
                        <li>
                            <Link to="/contact" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0">
                                Contact
                            </Link>
                        </li>
                        {/* Boutique */}
                        <li>
                            <Link to="/shop" className="ml-10 text-green-700 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
                                Boutique
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
