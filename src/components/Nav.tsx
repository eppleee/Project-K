//import BuildingsDropdown from "./BuildingsDropdown";
import { useState } from "react";

const Nav = () => {
    return (
        <nav className="flex flex-row space-x-4">
            <a href="/about" className="hover:text-[#cc9900]">
                About
            </a>
            <a href="/contact" className="hover:text-[#cc9900]">
                Contact
            </a>
            <a href="/projects" className="hover:text-[#cc9900]">
                Projects
            </a>
        </nav>
    );
};

export default Nav;