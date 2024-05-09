import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a className="flex items-center gap-2" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="text-lg font-semibold">Speed Inc</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a className="hover:text-gray-300" href="#">
              Dashboard
            </a>
            <a className="hover:text-gray-300" href="#">
              Team
            </a>
            <a className="hover:text-gray-300" href="#">
              HR
            </a>
            <a className="hover:text-gray-300" href="#">
              Settings
            </a>
          </nav>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
