import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import '../../styles/Header.css'
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  ,
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    // return  ()=> window.removeEventListener('scroll', handleStickyHeader)
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <div className="header flex items-center" ref={headerRef}>
      <div className="container w-[1000px] m-0 m-auto">
        <div className="flex justify-between items-center">
          {/* loog */}
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex gap-[2.7rem] items-center">
              {navLinks?.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-red-500 text-[16px] leading-7 font-[700]"
                        : "text-textColor text-[16px] leading-7 font-[700] hover:text-red-500"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav-right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] cursor-pointer h-[35px]">
                  <img src={user} alt="" className="w-full h-full" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="btn h-[40px] mt-[-0px] flex items-center">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <MdOutlineMenu className="cursor-pointer h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
