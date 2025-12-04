import React from "react";
import { RiQuillPenLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-luxe">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          <span className="navbar-brand-mark">
            <RiQuillPenLine size={18} />
          </span>
          <span className="fw-semibold">LuxeJournal</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#featured">
                Featured
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#latest">
                Latest
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#categories">
                Categories
              </a>
            </li>
            <li className="nav-item d-flex align-items-center ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#newsletter"
                className="btn btn-sm btn-luxe-primary d-inline-flex align-items-center gap-1"
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
