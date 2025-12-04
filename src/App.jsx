import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import LatestPosts from "./components/LatestPosts";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <main>
        <section id="featured" data-section>
          <FeaturedPosts />
        </section>
        <section id="latest" data-section>
          <LatestPosts />
        </section>
        <section id="categories" data-section>
          <Categories />
        </section>
        <section id="newsletter" data-section>
          <Newsletter />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
