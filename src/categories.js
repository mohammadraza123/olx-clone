import { GrCopy } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { RiBillLine } from "react-icons/ri";
import { CgCreditCard } from "react-icons/cg";

export const categories = [
  {
    id: 1,
    title: "Mobile Phones",
    path: "",
  },
  {
    id: 2,
    title: "Cars",
    path: "",
  },
  {
    id: 3,
    title: "Motercycles",
    path: "",
  },
  {
    id: 4,
    title: "Houses",
    path: "",
  },
  {
    id: 5,
    title: "Audio-Videos",
    path: "",
  },
  {
    id: 6,
    title: "Tablets",
    path: "",
  },
];

export const dropdowncategories = [
  {
    id: 1,
    title: "Mobiles",
    nested: [
      {
        title: "Mobile Phones",
      },
      {
        title: "Accessories",
      },
      {
        title: "Smart Watches",
      },
      {
        title: "Tablets",
      },
    ],
  },
  {
    id: 1,
    title: "Bikes",
    nested: [
      {
        title: "Motercycles",
      },
      {
        title: "Bicycles",
      },
      {
        title: "Spare Parts",
      },
      {
        title: "Bikes Accessories",
      },
    ],
  },
  {
    id: 1,
    title: "Jobs",
    nested: [
      {
        title: "Online",
      },
      {
        title: "Other Jobs",
      },
      {
        title: "Education",
      },
      {
        title: "Content Writing",
      },
    ],
  },
  {
    id: 1,
    title: "Furniture & Home Decor",
    nested: [
      {
        title: "Sofa & Chairs",
      },
      {
        title: "Beds & Wardrobes",
      },
      {
        title: "Other Household Items",
      },
      {
        title: "Tables & Dining",
      },
    ],
  },
];

export const allCategoriesWithImages = [
  {
    id: 1,
    icon: "/assets/categories/category-1.png",
    title: "Mobiles",
  },
  {
    id: 2,
    icon: "/assets/categories/category-2.png",
    title: "Vehicles",
  },
  {
    id: 3,
    icon: "/assets/categories/category-3.png",
    title: "Property For Sale",
  },
  {
    id: 4,
    icon: "/assets/categories/category-4.png",
    title: "Property For Rent",
  },
  {
    id: 5,
    icon: "/assets/categories/category-5.png",
    title: "Electronics & Home Appliances",
  },
  {
    id: 6,
    icon: "/assets/categories/category-6.png",
    title: "Bikes",
  },
  {
    id: 7,
    icon: "/assets/categories/category-7.png",
    title: "Business, Industrial & Agriculture",
  },
  {
    id: 8,
    icon: "/assets/categories/category-8.png",
    title: "Services",
  },
  {
    id: 9,
    icon: "/assets/categories/category-9.png",
    title: "Jobs",
  },
  {
    id: 10,
    icon: "/assets/categories/category-10.png",
    title: "Animals",
  },
  {
    id: 11,
    icon: "/assets/categories/category-11.png",
    title: "Furniture & Home Decor",
  },
  {
    id: 12,
    icon: "/assets/categories/category-12.png",
    title: "Fashion & Beauty",
  },
  {
    id: 13,
    icon: "/assets/categories/category-13.png",
    title: "Books, Sports & Hobbies",
  },
  {
    id: 14,
    icon: "/assets/categories/category-14.png",
    title: "Kids",
  },
];

export const menuItems = [
  { icon: GrCopy, text: "My Ads" },
  { icon: FaRegHeart, text: "Favourites & Saved searches" },
  { icon: FiEye, text: "Public Profile" },
  { icon: RiBillLine, text: "Buy Discounted Packages" },
  { icon: CgCreditCard, text: "Bought Packages and Billing" },
  { icon: MdHelpOutline, text: "Help" },
  { icon: LuSettings, text: "Settings" },
];
