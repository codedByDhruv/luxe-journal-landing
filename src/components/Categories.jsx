import React from "react";
import {
  RiReactjsLine,
  RiPenNibLine,
  RiStackshareLine,
  RiTeamLine,
  RiRocket2Line,
} from "react-icons/ri";

const categories = [
  {
    icon: <RiReactjsLine />,
    name: "Engineering",
    description:
      "Architecture notes, patterns, and tradeoffs from real product teams.",
  },
  {
    icon: <RiPenNibLine />,
    name: "Design",
    description:
      "Layout, typography, and motion that feel premium without being loud.",
  },
  {
    icon: <RiStackshareLine />,
    name: "Product",
    description: "Roadmaps, launches, pricing, and measuring what matters.",
  },
  {
    icon: <RiTeamLine />,
    name: "Teams",
    description:
      "Rituals, communication, and decision-making for calm, effective teams.",
  },
  {
    icon: <RiRocket2Line />,
    name: "Founders",
    description: "Stories and systems from early-stage builders and studios.",
  },
];

const Categories = () => {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge-soft mb-2">Categories</span>
          <h2 className="h3 mb-2">Explore the library</h2>
          <p className="text-muted-custom small mb-0">
            Every piece is written to be timeless and practical, not just news.
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {categories.map((category, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-3">
              <div className="surface-card h-100 p-3 p-md-4 d-flex flex-column">
                <div className="mb-3 d-flex align-items-center gap-2">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="h6 mb-0">{category.name}</h3>
                </div>
                <p className="text-muted-custom small mb-0">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
