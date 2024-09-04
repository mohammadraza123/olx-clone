import React from "react";
import footerBanner from "/assets/icons/footer-banner.webp";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Popular Categories",
    links: [
      { name: "Cars", apicategory: "vehicle" },
      { name: "Flats for rent", apicategory: "home-decoration" },
      { name: "Jobs", apicategory: "laptops" },
      { name: "Mobile Phones", apicategory: "smartphones" },
    ],
  },
  {
    title: "Trending Searches",
    links: [
      { name: "Bikes", apicategory: "vehicle" },
      { name: "Watches", apicategory: "mens-watches" },
      { name: "Books", apicategory: "laptops" },
      { name: "Dogs", apicategory: "laptops" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "About OLX Group", href: "#" },
      { name: "OLX Blog", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "OLX for Businesses", href: "#" },
    ],
  },
  {
    title: "Olx",
    links: [
      { name: "Help", href: "#" },
      { name: "Sitemap", href: "#" },
      { name: "Terms of use", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

const Section = ({ title, links, navigate }) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            onClick={() => navigate(`/category/${link.apicategory}`)}
            className=" text-sm text-gray-400 hover:text-black cursor-pointer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen">
      {/* Your main content will go here */}
      <div className=" sm:px-6 lg:px-8">
        {/* Main content of the page */}
      </div>

      {/* Footer and Banner Section */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="bg-[#f8faf9]">
          <div className="flex items-center justify-center gap-3 mx-auto sm:px-6 lg:px-8">
            <img src={footerBanner} className="object-contain" alt="Footer Banner" />
            <div className="p-6 text-center md:text-start">
              <h1 className="text-4xl font-medium">TRY THE OLX APP</h1>
              <h3 className="text-xl">
                Buy, sell and find just about anything using the app on your mobile.
              </h3>
            </div>
          </div>
        </div>
        <footer className="bg-[#ebeeef] border-t text-red py-10">
          <div className="container mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  links={section.links}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
