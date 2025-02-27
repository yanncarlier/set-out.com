import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically gets the current year

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} SET-OUT INTERNATIONAL COMPANY LIMITED. <br /> All
          rights reserved.
        </p>
        {/* <p className="text-sm mt-2">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
