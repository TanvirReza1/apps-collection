import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      {/* Main footer content */}
      <div className="footer sm:footer-horizontal p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-base-200 hover:bg-black hover:text-white transition hover:scale-110"
            >
              <FaSquareXTwitter className="text-xl" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-base-200 hover:bg-red-600 hover:text-white transition hover:scale-110"
            >
              <FaYoutube className="text-xl" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-base-200 hover:bg-blue-600 hover:text-white transition hover:scale-110"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </nav>
      </div>

      {/* Copyright section */}
      <div className="text-center py-4 border-t border-base-content/10">
        <p>© {new Date().getFullYear()} Hero.IO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
