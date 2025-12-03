import { useState } from "react";
import Button from "../../utilis/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="flex md:justify-around justify-between items-center md:p-4 relative z-10 bg-white  border-b border-b-gray-100 ">
        <div className="">
          <img src="/logo-dark.svg" alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 text-gray-400">
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Home
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              About
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Contact
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Blog
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <div className=" hidden md:flex">
            <Button />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <img src="/icon-close.svg" alt="" />
              ) : (
                <img src="/icon-hamburger.svg" alt="" />
              )}
            </button>
          </div>
        </div>

        {/* mobile responsive with toggle */}
        <div
          className={` bg-white shadow-2xl min-w-screen absolute top-[170%] md:hidden ${
            isOpen ? "block" : "hidden"
          } py-2`}
        >
          <ul className="flex flex-col items-center gap-4 text-gray-900">
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Home
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              About
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Contact
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Blog
            </li>
            <li className="hover:border-b hover:border-b-teal-600 cursor-pointer ">
              Careers
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
