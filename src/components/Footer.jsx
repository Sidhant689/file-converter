import React from "react";
import { Footer, FooterLink, FooterIcon } from "flowbite-react";
import {
  BsEnvelope,
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterSection = () => {
  return (
    <footer className="footerSec bg-dark text-white py-5">
      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About</h5>
              <p>
                This is a sample footer section where you can provide a brief
                description or information about your website or application.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="#" className="text-white">
                    Home
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#" className="text-white">
                    About
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#" className="text-white">
                    Contact
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <BsEnvelope className="me-2" />
                  <a href="mailto:contact@example.com" className="text-white">
                    contact@example.com
                  </a>
                </li>
                <li>
                  <BsTelephone className="me-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
      <div className="container mt-3">
        <div className="row">
          <div className="col text-center">
            <FooterIcon
              href="#"
              icon={BsFacebook}
              className="text-white me-3"
            />
            <FooterIcon
              href="#"
              icon={BsInstagram}
              className="text-white me-3"
            />
            <FooterIcon href="#" icon={BsTwitter} className="text-white me-3" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} The Coding Nest. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
