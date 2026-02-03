import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaFigma,
  FaGithub,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import theme from "../../theme/Theme";
import SpotlightCard from "../common/SpotlightCard";

const Skills = () => {
  const skillList = [
    { name: "HTML", icon: <FaHtml5 size={32} /> },
    { name: "CSS", icon: <FaCss3 size={32} /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare size={32} /> },
    { name: "React.js", icon: <FaReact size={32} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={32} /> },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion size={32} />,
    }, // Diamond shape for framer
    { name: "Git & GitHub", icon: <FaGithub size={32} /> },
    { name: "Figma", icon: <FaFigma size={32} /> },
  ];

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
              TechStack{" "}
              <span style={{ color: theme.colors.accentPrimary }}>
                I Prefer
              </span>
            </h2>
            <p style={{ color: theme.colors.textMuted }}>
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2, // Fast entrance
                delay: index * 0.05,
              }}
            >
              <SpotlightCard className="h-full">
                <div className="p-6 flex flex-col items-center justify-center gap-4 text-center h-full hover:bg-white/5 transition-colors duration-200">
                  <div style={{ color: theme.colors.accentPrimary }}>
                    {skill.icon}
                  </div>
                  <span
                    className="font-medium text-lg"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {skill.name}
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
