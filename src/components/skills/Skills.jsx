import React from "react";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";

const skills = [
  "HTML & CSS",
  "JavaScript (ES6+)",
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
  "Figma",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-surface"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              Technical{" "}
              <span style={{ color: theme.colors.accentPrimary }}>Arsenal</span>
            </h2>
            <p style={{ color: theme.colors.textMuted }}>
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                borderColor: theme.colors.accentPrimary,
                backgroundColor: `${theme.colors.accentPrimary}0D`, // Slight gold tint
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.15, // Fast response
                ease: "easeOut", // Smooth deceleration
                delay: index * 0.05, // Keep entrance delay
              }}
              className="p-4 rounded-lg flex items-center justify-center border transition-colors duration-300 group cursor-default"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border,
              }}
            >
              <span
                className="font-medium transition-colors group-hover:text-accent-primary"
                style={{ color: theme.colors.textSecondary }}
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
