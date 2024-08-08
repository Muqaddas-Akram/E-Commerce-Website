import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Products',
    link: '/top-rated',
  },
  {
    title: 'Best Products',
    link: '/best-selling',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

const Footer = () => {
  return (
    <div className="bg-sky-500/40 text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Electronics
            </h1>
            <p>
              One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer text-black hover:text-sky-500 hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer text-black hover:text-sky-500 hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl text-black hover:text-sky-500" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl text-black hover:text-sky-500" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl text-black hover:text-sky-500" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-black hover:text-sky-500" />
                  <p className="text-black">Faisalabad</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt className="text-black hover:text-sky-500" />
                  <p className="text-black">+92 308-6863820</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;