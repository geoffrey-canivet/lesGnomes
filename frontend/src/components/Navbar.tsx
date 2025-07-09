import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
{/*import logoNav from "../assets/img/favicon2.svg";*/}
import logoNav from "../assets/img/navIconGreen-900.png";
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
        <nav className="bg-green-800 border-b-2 border-b-green-900 shadow-[0_6px_10px_-4px_rgba(0,0,0,0.35)]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="shadow-green w-7 h-7 flex items-center justify-center rounded-full bg-[#B5834F]">
                            <img src={logoNav} className="h-4 object-contain" alt="gnome Logo" />
                        </div>
                        <span className="text-shadow-green font-title self-center text-2xl font-semibold whitespace-nowrap text-[#B5834F]">
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
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#B5834F] rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        {/* Accueil */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                Accueil
                            </NavLink>
                        </li>
                        {/* À propos */}
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                À propos
                            </NavLink>
                        </li>
                        {/* Atelier */}
                        <li>
                            <NavLink
                                to="/workshop"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                Atelier
                            </NavLink>
                        </li>
                        {/* Gallerie Dropdown */}
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:text-[#B5834F] md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                aria-expanded={isDropdownOpen}
                                aria-controls="dropdownNavbar"
                                id="dropdownNavbarLink"
                                type="button"
                            >
                                Crétations
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
                                className={`bg-green-800 border-b-2 border-green-900 shadow-[0_6px_10px_-4px_rgba(0,0,0,0.35)] z-10 font-normal  rounded-lg w-44 absolute left-0 top-full mt-2 ${
                                    isDropdownOpen ? '' : 'hidden'
                                }`}
                                aria-labelledby="dropdownNavbarLink"
                            >
                                <ul className="py-2 text-sm text-white">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Toutes les créations
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Gnomes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Maisons
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Lampes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Autres
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Fées
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Boites
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Chateaux
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:text-[#B5834F]">
                                            Attrape rêve
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* Media */}
                        <li>
                            <NavLink
                                to="/media"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                Media
                            </NavLink>
                        </li>
                        {/* Evenements */}
                        <li>
                            <NavLink
                                to="/news"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                Evenements
                            </NavLink>
                        </li>
                        {/* Contact */}
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    [
                                        "block py-2 px-3 rounded-sm md:bg-transparent md:p-0 transition-colors duration-300",
                                        isActive ? "text-[#B5834F] text-shadow-green underline" : "text-white hover:text-[#B5834F] hover:text-shadow-green"
                                    ].join(" ")
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {/* Boutique */}
                        <li>
                            <Link to="/shop" className="shadow-green ml-10 text-white bg-[#B5834F] hover:bg-white hover:text-[#B5834F] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
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
