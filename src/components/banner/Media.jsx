import React from "react";
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const Media = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 xl:flex-row gap-6 lg:gap-0">
      <div className="text-center">
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
            href="https://twitter.com"
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
            href="mailto:"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
