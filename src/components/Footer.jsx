import React from "react";
import {
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiCopyrightLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer-shell py-3 mt-4">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-2 text-muted-custom small">
          <RiCopyrightLine />
          <span>{new Date().getFullYear()} LuxeJournal Studio. All rights reserved.</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="text-muted-custom text-decoration-none fs-5">
            <RiTwitterXLine />
          </a>
          <a href="#" className="text-muted-custom text-decoration-none fs-5">
            <RiGithubLine />
          </a>
          <a href="#" className="text-muted-custom text-decoration-none fs-5">
            <RiLinkedinBoxLine />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
