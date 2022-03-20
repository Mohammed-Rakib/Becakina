import React from "react";
import "./Footer.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer__main">
      <div className="md:w-9/12 w-11/12 mx-auto">
        <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 flex  flex-col justify-center items-center ">
          <div className="  ">
            <h4 className="mb-3">Download</h4>
            <div className="google__paly">
              <div className="google__icon">
                <FcGoogle className="footer__icon" />
              </div>
              <div className="google__info">
                <p className="footer__para">
                  <small>GET IT ON</small> <br />
                  <strong>Google Play</strong>
                </p>
              </div>
            </div>
            <div className=" my-3 google__paly">
              <div className="google__icon">
                <AiFillApple className="footer__icon" />
              </div>
              <div className="google__info">
                <p className="footer__para">
                  <small>Download on the</small> <br />
                  <strong>App Store</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="footer__section ">
            <h4 className="mb-3">Menu</h4>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Purchasing Policy</p>
            <p>Terms & Conditions</p>
            <p>Career</p>
          </div>
          <div className="footer__section ">
            <h4 className="mb-3">Contact Us</h4>
            <p>House #8, Road # 14,</p>
            <p>Dhanmondi, Dhaka-1209.</p>
            <p>becakina@bd.com.bd</p>
            <p>Contact no: 09638111666</p>
          </div>
          <div className="">
            <h4 className="mb-3">Get in Touch</h4>
            <div className="social__icons flex">
              <FaFacebookF className="facebook" />
              <FaInstagram className="instagram" />
              <IoLogoYoutube className="youtube" />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright text-center py-2">
          <p>&copy; 2022 Becakina.com Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
