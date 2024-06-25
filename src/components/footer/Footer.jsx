import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div className="w-full md:w-auto text-blue-500">
              <img src="/Images/SB_Logo.png" className="h-24 w-24" alt="" />
            </div>
            <div className="w-full md:w-auto text-blue-400 text-sm md:mt-0">
              <p>Have any question</p>
              <p className="font-bold">+91 1122345678</p>
            </div>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end">
              <li className="mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-white hover:text-gray-400">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-auto text-center">
              <h3 className="text-blue-400 font-bold mb-2">
                Subscribe To Newsletter
              </h3>
            </div>
            <div className=" md:w-auto mt-4 md:mt-0">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="px-2 py-2 rounded-l-md text-white focus:outline-none focus:bg-gray-600"
                />
                <button
                  type="submit"
                  className="px-2 py-2 rounded-r-md bg-blue-400 text-white hover:bg-blue-600 focus:outline-none"
                >
                  Subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-auto text-center md:text-left">
              <p className="text-gray-800 text-sm">
                Sea Breeze Ship Management Private Limited <br />
                Unit 2C, 2nd Floor, Rushabh Chambers Premises Co-op Society Ltd,
                Makwana Road, Marol <br />
                Andheri East, Mumbai 400059
              </p>
              <p className="text-gray-800 text-sm mt-2">+91 Contact</p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0 text-center md:text-right">
              <p className="text-gray-800 text-sm">
                © 2024 Seabreeze Group. All Rights Reserved
              </p>
              <a href="/privacy" className="text-gray-800 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
