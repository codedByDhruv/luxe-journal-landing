import React from "react";
import { RiStarSmileLine, RiCalendarLine, RiTimerLine } from "react-icons/ri";

const featuredPosts = [
  {
    id: 1,
    tag: "Product",
    title: "The calm roadmap: shipping without chaos",
    description:
      "How we plan, scope, and release features without burning out the team or the roadmap.",
    readTime: "10 min read",
    date: "Nov 26, 2025",
  },
  {
    id: 2,
    tag: "Design",
    title: "Composing premium-feel interfaces in 2025",
    description:
      "Margins, typography, and motion choices that create a quiet but luxurious aesthetic.",
    readTime: "8 min read",
    date: "Nov 19, 2025",
  },
  {
    id: 3,
    tag: "Engineering",
    title: "Patterns for long-lived codebases",
    description:
      "Dependency boundaries, contracts, and documentation patterns that scale with your org.",
    readTime: "12 min read",
    date: "Nov 12, 2025",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="d-flex justify-content-between align-items-baseline mb-4">
          <div>
            <span className="badge-soft mb-2 d-inline-flex align-items-center gap-2">
              <RiStarSmileLine size={16} />
              Editor’s selection
            </span>
            <h2 className="h3 mb-0">Featured essays</h2>
          </div>
          <a
            href="#latest"
            className="text-decoration-none text-muted-custom small d-none d-md-inline"
          >
            View latest collection →
          </a>
        </div>

        <div className="row g-4">
          {featuredPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <article className="surface-card post-card h-100 p-4 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="category-chip">{post.tag}</span>
                  <span className="small text-muted-custom">Premium</span>
                </div>
                <h3 className="h5 mb-2">{post.title}</h3>
                <p className="text-muted-custom small mb-3 flex-grow-1">
                  {post.description}
                </p>
                <div className="d-flex justify-content-between align-items-center text-muted-custom small mt-2 pt-2 border-top">
                  <div className="d-flex align-items-center gap-2">
                    <RiCalendarLine />
                    <span>{post.date}</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <RiTimerLine />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
