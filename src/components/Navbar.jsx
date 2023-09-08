import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { saveAs } from "file-saver";
import myCV from "/CV - Andrii Plyska.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toogle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle((prev) => !prev);
  };

  const clickOnLink = (link, isMobile) => () => {
    isMobile && switchToggle();
    if (link) {
      setActive(link);
    } else {
      setActive("");
      window.scrollTo(0, 0);
    }
  };

  const handleDownload = () => {
    saveAs(myCV, "CV - Andrew Plyska.pdf");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={clickOnLink("")}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Andrew &nbsp;
            <span className="md:block hidden"> | Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={clickOnLink(link.title, false)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <button
            className="bg-secondary py-3 px-8 outline-none w-fit text-tertiary uppercase hover:bg-white font-bold rounded-xl"
            onClick={handleDownload}
          >
            upload cv
          </button>
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={switchToggle}
          />
          <div
            className={`${
              !toogle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={clickOnLink(link.title, true)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <button
                className="bg-secondary py-3 px-8 outline-none w-fit text-tertiary hover:bg-white font-bold shadow-md shadow-primary rounded-xl"
                onClick={handleDownload}
              >
                upload cv
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
