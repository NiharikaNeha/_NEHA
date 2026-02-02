import React from "react";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    description:
      "Leading the frontend team in rebuilding the core product dashboard using Next.js and Micro-frontends architecture.",
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Creative Pulse Studio",
    description:
      "Developed and maintained multiple client projects, ranging from e-commerce platforms to corporate websites.",
  },
  {
    year: "2019 - 2021",
    role: "Junior Web Developer",
    company: "StartUp Vision cars",
    description:
      "Collaborated with designers to implement responsive user interfaces and interactive features.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className="font-heading text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ color: theme.colors.textPrimary }}
        >
          Professional{" "}
          <span style={{ color: theme.colors.accentPrimary }}>Journey</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-12 relative">
          {/* Timeline Line */}
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{ backgroundColor: theme.colors.border }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-center md:justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.accentPrimary,
                }}
              />

              {/* Content */}
              <div
                className="ml-12 md:ml-0 md:w-[45%] p-6 rounded-xl border border-transparent hover:border-accent-primary transition-colors duration-300 bg-surface/50"
                style={{
                  backgroundColor: `${theme.colors.surface}80`, // 50% opacity
                }}
              >
                <span
                  className="text-sm font-bold tracking-wider uppercase mb-2 block"
                  style={{ color: theme.colors.accentPrimary }}
                >
                  {exp.year}
                </span>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {exp.role}
                </h3>
                <h4
                  className="text-sm font-medium mb-4"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {exp.company}
                </h4>
                <p style={{ color: theme.colors.textMuted }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
