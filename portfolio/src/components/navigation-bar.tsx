import { useState } from "react";
import { Menu, X } from "lucide-react"; // Added X for closing
import { useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpenNav(false); // close mobile menu after clicking
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-5">
        {/* Logo */}
        <section
          onClick={() => handleNavigation('/')}
          className="flex flex-col cursor-pointer mx-3"
        >
          <span className="text-sm/2 font-medium">Online Portfolio</span>
          <h1 className="text-lg leading-tight font-bold">Nathaniel Aniban</h1>
        </section>

        {/* Menu Button */}
        <div className="md:hidden">
          {openNav ? (
            <X
              onClick={() => setOpenNav(false)}
              className="w-10 h-10 text-gray-600 cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
            />
          ) : (
            <Menu
              onClick={() => setOpenNav(true)}
              className="w-10 h-10 text-gray-600 cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
            />
          )}
        </div>

        {/* Navigation Links */}
        <section
          className={`${
            openNav ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"
          } absolute md:static left-0 top-16 w-full md:w-auto flex flex-col md:flex-row items-center gap-4 p-4 md:p-0 bg-gray-50 md:bg-transparent transition-all duration-300 ease-in-out md:translate-y-0 md:opacity-100 md:visible`}
        >
          <ul className="flex flex-col md:flex-row md:gap-5 w-full md:w-auto">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`cursor-pointer py-2 rounded-md text-center md:text-left transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-600 font-semibold underline"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default NavigationBar;
