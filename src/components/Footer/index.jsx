import React from "react";
import footerBanner from "/assets/icons/footer-banner.webp";

const sections = [
  {
    title: "Popular Categories",
    links: [
      { name: "Cars", href: "#" },
      { name: "Flats for rent", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Mobile Phones", href: "#" },
    ],
  },
  {
    title: "Trending Searches",
    links: [
      { name: "Bikes", href: "#" },
      { name: "Watches", href: "#" },
      { name: "Books", href: "#" },
      { name: "Dogs", href: "#" },
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

const Section = ({ title, links }) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className=" text-sm text-gray-400 hover:text-black"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <>
      <div className="mx-auto mt-8 sm:px-6 lg:px-8 block md:flex items-center justify-center gap-3 bg-[#f8faf9]">
        <img src={footerBanner} className=" object-contain" />
        <div className="p-6 text-center md:text-start">
          <h1 className="text-4xl font-medium">TRY THE OLX APP</h1>
          <h3 className="text-xl">
            Buy, sell and find just about anything using the app on your mobile.
          </h3>
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
              />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
