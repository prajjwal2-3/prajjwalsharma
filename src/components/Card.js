import React from "react";
import { PROFILE_PIC } from "../assets/data";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillFilePpt } from "react-icons/ai";
import { RESUME_LINK } from "../assets/data";

function Card({ name, title, social: { github, linkedin, twitter, email } }) {
  return (
    <div className="w-full flex flex-col justify-center max-w-xs mx-auto bg-white rounded-xl p-5 border">
      <img
        className="w-32 mx-auto shadow-xl rounded-full"
        src={PROFILE_PIC}
        alt="Profile face"
      />

      <div className="text-center mt-5 ">
        <p className="text-xl sm:text-3xl font-semibold text-gray-900">
          {name}
        </p>
        <p className="text-xs sm:text-lg text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
          {title}
        </p>
        <div className="flex align-center justify-center mt-4 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            href={github}
          >
            <FaGithub />
            <span class="sr-only ">Github</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
            href={linkedin}
          >
            <FaLinkedin />
            <span class="sr-only">LinkedIn</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            href={twitter}
          >
            <FaTwitter />
            <span class="sr-only">Twitter</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
            href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
          >
            <FaRegEnvelope />
            <span class="sr-only">Email</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
            href={RESUME_LINK}
          >
            <AiFillFilePpt />
            <span class="sr-only">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
