import React from "react";

const Nav = () => (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="container mx-auto px-4">
            <ul className="flex gap-6 justify-center py-4">
                <li>
                    <a
                        href="#"
                        className="text-gray-700 dark:text-[#f474b6] hover:text-[#f474b6] dark:hover:text-[white] transition-colors"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="text-gray-700 dark:text-[#f474b6] hover:text-[#f474b6] dark:hover:text-[white] transition-colors"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-gray-700 dark:text-[#f474b6] hover:text-[#f474b6] dark:hover:text-[white] transition-colors"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="text-gray-700 dark:text-[#f474b6] hover:text-[#f474b6] dark:hover:text-[white] transition-colors"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;