import React from "react";
import { contactImg } from "../../assets/index";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover border-[2px] border-gray-500 rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-designColor">Ali Haider</h3>
        <p className="text-lg font-normal text-gray-400">
          Electrical Engineering | Machine Learning | Web Development |
          Telecommunincations
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lert's get in touch. Send me a message and I'll get back to you as
          soon as possible.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92-319-0891113</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">gardazi9211@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col py-8 xl:flex-row gap-6 lg:gap-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              className="bannerIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com/"
              className="bannerIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="bannerIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:" // add your email here
              className="bannerIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="https://wa.me/+923565656565"
              className="bannerIcon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
