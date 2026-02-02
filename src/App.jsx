import React, { useEffect } from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/service/Services";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/Footer";
import theme from "./theme/Theme";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    // Map theme colors to CSS variables
    root.style.setProperty("--color-background", theme.colors.background);
    root.style.setProperty("--color-surface", theme.colors.surface);
    root.style.setProperty("--color-text-primary", theme.colors.textPrimary);
    root.style.setProperty(
      "--color-text-secondary",
      theme.colors.textSecondary,
    );
    root.style.setProperty("--color-text-muted", theme.colors.textMuted);
    root.style.setProperty(
      "--color-accent-primary",
      theme.colors.accentPrimary,
    );
    root.style.setProperty("--color-accent-hover", theme.colors.accentHover);
    root.style.setProperty("--color-border", theme.colors.border);
    root.style.setProperty("--color-divider", theme.colors.divider);
  }, []);

  return (
    <div
      className="min-h-screen w-full font-body overflow-x-hidden"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
      }}
    >
      <style>{`
        ::selection {
          background-color: ${theme.colors.accentPrimary};
          color: #000;
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
