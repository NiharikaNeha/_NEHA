import React from "react";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-4 rounded-lg flex items-center justify-center border transition-colors duration-300 hover:border-accent-primary group"
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
