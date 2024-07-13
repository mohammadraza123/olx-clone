import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import icon from "/assets/icons/olx-web-icon.png";
import carIcon from "/assets/icons/car-icon.png";
import buttonIcon from "/assets/icons/button-icon.svg";
import propertyIcon from "/assets/icons/property-icon.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", to: "/", current: true },
  { name: "Team", to: "/team", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 bg-white z-10 border border-b pb-0 md:pb-5"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex-col p-2 h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaXmark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center gap-9 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img className="h-8 w-auto" src={icon} alt="Your Company" />
                  </Link>
                </div>

                <div className="flex gap-2 justify-center items-center text-center hover:text-blue-400">
                  <div className="w-9 h-9 border border-black rounded-full flex justify-center items-center">
                    <img src={carIcon} width="25px" />
                  </div>
                  <div>
                    <h3 className="font-bold">Raza</h3>
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center text-center hover:text-blue-400">
                  <div className="w-10 h-10 border border-black rounded-full flex justify-center items-center">
                    <img src={propertyIcon} width="25px" />
                  </div>
                  <div>
                    <h3 className="font-bold">Property</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-row items-center gap-4">
              <div className="relative w-72">
                <HiOutlineLocationMarker className="h-6 w-6 absolute top-1/2 left-2 transform -translate-y-1/2 pointer-events-none" />
                <select className="border border-[#d8dfe0] w-full h-12 pl-10 pr-10 outline-none appearance-none rounded">
                  <option>Pakistan</option>
                  <option>Sindh</option>
                  <option>Punjab</option>
                </select>
                <IoIosArrowDown className="h-7 w-7 absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative w-2/4">
                <input
                  type="search"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="border border-[#d8dfe0] p-3 w-full h-12 rounded outline-none pr-12"
                  style={{ paddingRight: "3rem" }}
                />
                <div className="absolute top-0 right-0 h-12 w-12 rounded-r bg-black flex items-center justify-center">
                  <FaSearch className="h-6 w-6 text-white pointer-events-none" />
                </div>
              </div>
              <div>
                <Link
                  to="/login"
                  className="underline font-bold cursor-pointer"
                >
                  Login
                </Link>
              </div>

              <div className="relative">
                <img src={buttonIcon} alt="Button Icon" className="block" />
                <h2 className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center font-bold cursor-pointer">
                  + Sell
                </h2>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
