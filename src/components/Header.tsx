import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-16 sticky">
      <header className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Jeremiah Plumstead</h1>
          </div>
          <div className="hidden md:block">
            <Navbar isResponsive={false} />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNav}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex justify-center">
            <Navbar isResponsive={true} />
          </div>
        )}
      </header>
    </div>
  );
}
