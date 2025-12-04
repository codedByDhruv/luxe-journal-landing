import React from "react";
import {
  RiSparkling2Line,
  RiArrowRightUpLine,
  RiTimeLine,
  RiUserSmileLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <header id="hero" className="hero-wrapper">
      <div className="container section-shell pt-5">
        <div className="row align-items-center gy-4 gy-lg-5">
          {/* Left */}
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 badge-soft mb-3">
              <RiSparkling2Line size={16} />
              <span>Curated insights for ambitious builders</span>
            </div>

            <h1 className="display-5 fw-semibold mb-3">
              A minimalist journal
              <br />
              for modern product minds.
            </h1>

            <p className="lead text-muted-custom mb-4">
              Thoughtful essays, practical playbooks, and behind-the-scenes stories
              from shipping real products. Crafted for founders, designers, and
              engineers who care about the details.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-3">
              <a
                href="#latest"
                className="btn btn-luxe-primary btn-lg d-flex align-items-center gap-2"
              >
                Browse latest stories
                <RiArrowRightUpLine />
              </a>
              <a
                href="#featured"
                className="btn btn-luxe-ghost btn-lg d-flex align-items-center gap-2"
              >
                View editor’s picks
                <RiTimeLine />
              </a>
            </div>

            <div className="d-flex flex-wrap gap-4 text-muted-custom small mt-2">
              <div className="d-flex align-items-center gap-2">
                <RiUserSmileLine />
                <span>Trusted by 12,000+ monthly readers</span>
              </div>
              <span>New editions every Tuesday & Friday</span>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-5">
            <div className="hero-bubble p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="badge-soft mb-2">Today’s highlight</span>
                  <h5 className="mb-1">Designing products with quiet luxury</h5>
                  <p className="text-muted-custom small mb-0">
                    A framework for building premium-feeling experiences without loud
                    visuals or aggressive growth hacks.
                  </p>
                </div>
              </div>

              <hr className="my-3" />

              <div className="row g-3 small">
                <div className="col-6">
                  <div className="surface-card p-3 h-100">
                    <p className="text-muted-custom mb-1">Highlights</p>
                    <ul className="mb-0 text-muted-custom">
                      <li>Pricing that feels fair</li>
                      <li>Delightful defaults</li>
                      <li>Subtle motion cues</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="surface-card p-3 h-100">
                    <p className="text-muted-custom mb-1">In this edition</p>
                    <ul className="mb-0 text-muted-custom">
                      <li>Case studies</li>
                      <li>Design checklist</li>
                      <li>Team rituals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-muted-custom small mt-3 mb-0 text-end">
                ~ 9 min read • Updated weekly
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
