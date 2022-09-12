import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Close from "../../public/assets/close.svg";
import Menu from "../../public/assets/menu.svg";
import logo from "/public/assets/logo.png";
import { navLinks } from "../constants";
import Button from "./Button";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = (scroll) => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return (
    <nav
      className={`fixed w-9/12 flex py-5 justify-between z-10 ${
        scroll === true ? "bg-slate-900/90" : ""
      }`}
    >
      <div className="w-[200px] h-[50px]">
        <Image src={logo} />
      </div>
      <ul className="list-none sm:flex hidden justify-center items-center flex-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <Link href="/auth/login">
        <a>
          <Button
            styles={` py-3 px-3 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[8px] outline-5 `}
          />
        </a>
      </Link>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <Close /> : <Menu />}
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
