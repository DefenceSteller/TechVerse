import { Link } from "@heroui/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaSquareFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

function Footer() {
  return (
    <footer
      className="bg-black dark:bg-[#e5e5e5] text-white dark:text-black py-10"
      style={{ fontFamily: "Kufi" }}
    >
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <Link
            className="flex justify-start items-center gap-1 text-inherit"
            href="/"
          >
            <GrTechnology size={40} />
            <p
              className="text-inherit text-4xl mt-2"
              style={{ fontFamily: "Stellen" }}
            >
              TechVerse
            </p>
          </Link>
          <p className="text-gray-400 dark:text-gray-800 mt-2">
            We help businesses take off and scale up quickly with perfectly
            crafted and effective web experiences.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://linkedin.com/company/team-techverse"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin className="dark:text-black cursor-pointer text-xl" />
            </a>
            <a
              href="https://facebook.com/people/TechVerse/61568233663648/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaSquareFacebook className="dark:text-black cursor-pointer text-xl" />
            </a>
            <a
              href="https://instagram.com/teamtechverse"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram className="dark:text-black cursor-pointer text-xl" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold ">Menus</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold ">Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 dark:text-gray-800">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold ">Head Office</h3>
          <p className="text-gray-400 dark:text-gray-800 mt-2 flex items-center gap-2">
            <FaEnvelope className="dark:text-black " />{" "}
            teamtechversesolutions@gmail.com
          </p>
          <p className="text-gray-400 dark:text-gray-800 flex items-center gap-2">
            <FaPhone className="dark:text-black " /> +92333-1315205
          </p>
          {/* <p className="text-gray-400 dark:text-gray-800 flex items-center gap-2">
            <FaMapMarkerAlt className="dark:text-black " />
            Hyderabad
          </p> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400 dark:text-gray-800 font-bold">
        Copyright © 2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
