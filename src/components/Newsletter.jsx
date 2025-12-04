import React from "react";
import {
  RiMailSendLine,
  RiLock2Line,
  RiUserSmileLine,
  RiTimeLine,
} from "react-icons/ri";

const Newsletter = () => {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="newsletter-shell p-4 p-md-5">
          <div className="row align-items-center gy-4">
            {/* Left copy */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 mb-3 badge-soft newsletter-pill-label">
                <RiMailSendLine size={16} />
                <span>Weekly briefing for product minds</span>
              </div>

              <h2 className="h2 mb-3">
                A calm, curated email for builders who
                <br className="d-none d-md-block" /> care about details.
              </h2>

              <p className="text-muted-custom small mb-4">
                One short briefing every Friday: what to ship, what to measure, and
                what to ignore. No fluff, no recycled threads—just practical ideas
                from real product work inside modern product teams.
              </p>

              <div className="newsletter-meta d-flex flex-wrap gap-3 text-muted-custom small">
                <div className="d-flex align-items-center gap-2">
                  <RiUserSmileLine />
                  <span>12,000+ readers</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <RiTimeLine />
                  <span>5–7 minute read</span>
                </div>
                <span>Zero spam. Ever.</span>
              </div>
            </div>

            {/* Right form */}
            <div className="col-lg-5">
              <div className="newsletter-panel p-3 p-md-4">
                <p className="small text-muted-custom mb-3">
                  Join the private list — you&apos;ll get the next issue this Friday.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="newsletter-input-shell">
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="name@studio.com"
                      required
                    />
                    <button type="submit" className="btn btn-luxe-primary newsletter-btn">
                      Join the list
                    </button>
                  </div>

                  <div className="d-flex align-items-center gap-2 text-muted-custom small mt-2">
                    <RiLock2Line />
                    <span>We only email once a week. Unsubscribe in one click.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
