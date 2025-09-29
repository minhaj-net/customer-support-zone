import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1280px] mx-auto md:p-0 p-3 mt-12 md:mt-20 bg-black text-white py-6 md:py-20 grid grid-cols-1 md:grid-cols-5 gap-4">
      <div>
        <h3 className="mb-4 font-bold text-2xl">CS — Ticket System</h3>
        <p className="text-[#A1A1AA]">
          Welcome to CS — Ticket System We’re here 24/7 to help you resolve
          issues quickly and efficiently. Our support team is always ready to
          assist you with technical issues, account management, billing, and
          product inquiries.
        </p>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-2">Company</h3>
        <ul className="space-y-3">
          <li className="text-[#A1A1AA]">About Us</li>
          <li className="text-[#A1A1AA]">Our Mission</li>
          <li className="text-[#A1A1AA]">Contact Saled</li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-2">Services</h3>
        <ul className="space-y-3">
          <li className="text-[#A1A1AA]">Products & Services</li>
          <li className="text-[#A1A1AA]">Customer Stories</li>
          <li className="text-[#A1A1AA]">Download Apps</li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-2">Information</h3>
        <ul className="space-y-3">
          <li className="text-[#A1A1AA]">Privacy Policy</li>
          <li className="text-[#A1A1AA]">Terms & Conditions</li>
          <li className="text-[#A1A1AA]">Join Us</li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-xl mb-2">Social Links</h3>
        <ul className="space-y-3">
          <li className="text-[#A1A1AA]">
            {" "}
            <span className="bg-white rounded-full  text-black mr-2">
              <i className="fa-brands fa-x-twitter"></i>
            </span>{" "}
            @CS — Ticket System
          </li>
          <li className="text-[#A1A1AA]">
            {" "}
            <span className="bg-white  rounded-full  text-black mr-2">
              <i class="fa-brands fa-linkedin-in"></i>
            </span>{" "}
            @CS — Ticket System
          </li>
          <li className="text-[#A1A1AA]">
            {" "}
            <span className="bg-white  rounded-full  text-black mr-2">
              <i class="fa-brands fa-facebook-f"></i>
            </span>{" "}
            @CS — Ticket System
          </li>
          <li className="text-[#A1A1AA]">
            {" "}
            <span className="bg-white  rounded-full  text-black mr-2">
              <i class="fa-solid fa-envelope"></i>
            </span>{" "}
            support@cst.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
