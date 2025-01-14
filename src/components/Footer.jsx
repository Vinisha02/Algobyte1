import React from "react";
import f1 from "../assets/f1.png";
/*
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
 */
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={f1}
          alt="Founder"
        />

        <h2>Algobyte</h2>
        <p>Official open source club from Department of Computer Science, Apaji Institute, Banasthali Vidyapith, Rajasthan.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/company/algobyte/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/algobyte.bv/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/algobyte" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
