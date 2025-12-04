import React from "react";
import {
  RiArticleLine,
  RiArrowRightSLine,
  RiCodeSSlashLine,
  RiLayoutMasonryLine,
  RiDatabase2Line,
} from "react-icons/ri";

const latestPosts = [
  {
    id: 1,
    category: "Engineering",
    icon: <RiCodeSSlashLine />,
    title: "Shipping a full-stack feature from draft to production",
    meta: "Case study • Product + Engineering • 11 min read",
  },
  {
    id: 2,
    category: "Product",
    icon: <RiLayoutMasonryLine />,
    title: "Designing upgrade paths that users actually appreciate",
    meta: "Product strategy • Monetisation • 9 min read",
  },
  {
    id: 3,
    category: "Infrastructure",
    icon: <RiDatabase2Line />,
    title: "When to invest in performance (and when to ignore it)",
    meta: "Scaling • Reliability • 13 min read",
  },
];

const LatestPosts = () => {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <div>
            <span className="badge-soft mb-2 d-inline-flex align-items-center gap-2">
              <RiArticleLine size={16} />
              The journal
            </span>
            <h2 className="h3 mb-0">Latest editions</h2>
          </div>
          <span className="text-muted-custom small d-none d-md-inline">
            Updated twice a week
          </span>
        </div>

        <div className="surface-card p-2 p-md-3">
          <div className="list-group list-group-flush">
            {latestPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                className="list-group-item list-group-item-action bg-transparent border-0 py-3 py-md-3 px-2 px-md-3"
              >
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                  <div className="d-flex align-items-center gap-3 flex-grow-1">
                    <div className="category-icon d-none d-md-flex">
                      {post.icon}
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="category-chip">{post.category}</span>
                      </div>
                      <h3 className="h6 mb-1">{post.title}</h3>
                      <p className="text-muted-custom small mb-0">{post.meta}</p>
                    </div>
                  </div>
                  <div className="ms-md-auto text-muted-custom small d-flex align-items-center gap-1">
                    <span>Read edition</span>
                    <RiArrowRightSLine />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
