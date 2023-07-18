import React from 'react'
import {Typography} from "@mui/material";
import "./Footer.css";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
    <div>
      <Typography variant="h5">About Me</Typography>
      <Typography>
        Hey, my name is Palak Khandelwal. I am a MERN-Stack Developer and a
        tutor and Programmer also.
      </Typography>

      <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
      </Link>
    </div>
    <div>
      <Typography variant="h6">Social Media</Typography>
      <a href="https://github.com/Palak2702/" target="black">
        <BsGithub />
      </a>
     
      <a href="https://instagram.com/" target="black">
        <BsInstagram />
      </a>
      <a href="https://www.linkedin.com/in/palak-khandelwal-036205203/" target="black">
        <BsLinkedin />
      </a>
    </div>
  </div>
  )
}

export default Footer
