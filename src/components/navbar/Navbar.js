import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto 
    flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600"
    >
      <div>
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <Link
            key={_id}
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
             hover:text-designColor duration-300"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl bg-black bg-opacity-25 w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer hover:bg-opacity-50"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-full h-screen absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <div className="w-full">
                <span
                  onClick={() => setShowMenu(false)}
                  className="text-xl absolute top-0 right-0 mt-8 mr-2 bg-black bg-opacity-25 w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer hover:bg-opacity-50"
                >
                  <MdClose />
                </span>
              </div>
              <ul className=" w-full flex flex-col gap-8">
                {navLinksdata.map((item) => (
                  <Link
                    key={item._id}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xl font-light text-gray-400 bg-black bg-opacity-25 cursor-pointer hover:text-designColor hover:bg-opacity-50 duration-300 text-center rounded-lg py-2 mx-8"
                    onClick={() => setShowMenu(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
