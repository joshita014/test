import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import Button from "../button/Button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex items-center font-medium primaryFont  justify-around text-white">
        <Link
          to="/"
          className="text-[20px] z-50 p-5 lg:w-auto w-full flex justify-between"
        >
          <div>
            <span className="font-bold">Charlie</span> health
          </div>

          <div
            className="text-4xl text-white lg:hidden "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </Link>

        <ul className="lg:flex hidden capitalize items-center gap-5 ">
          <li className="px-6 lg:flex ">
            <Navlinks />
          </li>
        </ul>
        <div className="lg:flex hidden gap-2">
          <Button
            name="Client Login"
            clName="py-3 px-7 border border-[#E7D3FF] text-[#E7D3FF] rounded-md "
          />
          <Button
            name="Get Started"
            clName="py-3 px-7 bg-[#E7D3FF] text-primaryBgColor rounded-md"
          />
        </div>

        {/* For Mobile view */}
        <ul
          className={`lg:hidden bg-primaryBgColor absolute w-full h-full bottom-0 py-24 pl-4 pr-4 duration-700 ${
            open ? "left-0" : "left-[100%]"
          }`}
        >
          <li className="py-7 px-3 lg:flex">
            <Navlinks />
          </li>
          <div className="flex lg:flex-row flex-col gap-2 py-5 px-4">
            <Button
              name="Client Login"
              clName="py-3 px-7 border border-[#E7D3FF] text-[#E7D3FF] rounded-md "
            />
            <Button
              name="Get Started"
              clName="py-3 px-7 bg-[#E7D3FF] text-primaryBgColor rounded-md"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
