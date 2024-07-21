import icon from "/assets/icons/olx-web-icon.png";
import carIcon from "/assets/icons/car-icon.png";
import buttonIcon from "/assets/icons/button-icon.svg";
import profileIcon from "/assets/icons/profile-icon.png";
import propertyIcon from "/assets/icons/property-icon.png";
import { Disclosure } from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { menuItems } from "../../categories";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";

const auth = getAuth(app);

const navigation = [
  { name: "Dashboard", to: "/", current: true },
  { name: "Team", to: "/team", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user }) {
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
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <FaXmark className=" h-6 w-6" />
                  ) : (
                    <HiBars3 className=" h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center gap-9 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img className="h-8 w-auto" src={icon} alt="Your Company" />
                  </Link>
                </div>

                <div className="flex gap-2 justify-center items-center text-center hover:text-blue-400">
                  <div className="w-9 h-9 border border-black rounded-full flex justify-center items-center">
                    <img src={carIcon} width="25px" alt="Car Icon" />
                  </div>
                  <div>
                    <h3 className="font-bold">Motors</h3>
                  </div>
                </div>
                <div className="flex gap-2 justify-center items-center text-center hover:text-blue-400">
                  <div className="w-10 h-10 border border-black rounded-full flex justify-center items-center">
                    <img src={propertyIcon} width="25px" alt="Property Icon" />
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
              <div className="flex">
                {user ? (
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 bg-white py-2 text-sm font-semibold text-gray-900">
                        <img src={profileIcon} height={35} width={38} />
                        <IoChevronDown
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg "
                    >
                      <div className="py-1">
                        <MenuItem>
                          <div className="flex items-center gap-5 px-3">
                            <div>
                              <img src={profileIcon} width={65} />
                            </div>
                            <div>
                              <p>Hello,</p>
                              <span className="w-full font-bold">
                                {user.displayName}
                              </span>
                            </div>
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="flex justify-center py-3 px-4 border-b w-full">
                            <button className="border-2 border-black py-2 px-2 rounded-md w-full">
                              View and edit your profile
                            </button>
                          </div>
                        </MenuItem>
                        {menuItems.map((item, index) => (
                          <MenuItem key={index}>
                            <div className="flex items-center gap-5 py-3 px-4 hover:bg-[#d3fcfc] cursor-pointer">
                              {<item.icon className=" text-2xl" />}
                              <p>{item.text}</p>
                            </div>
                          </MenuItem>
                        ))}
                        <MenuItem>
                          <div
                            className="flex items-center gap-5 py-3 px-3 hover:bg-[#d3fcfc] cursor-pointer"
                            onClick={() => signOut(auth)}
                          >
                            <MdLogout className="text-2xl" />
                            <p>Logout</p>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                ) : (
                  <Link
                    to="/login"
                    className="underline font-bold cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
              <div className="relative">
                <img src={buttonIcon} alt="Button Icon" className="block" />
                <h2 className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center font-bold cursor-pointer">
                  + Sell
                </h2>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
