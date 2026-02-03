import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Server,
  Github,
  GitBranch,
  Figma,
  Terminal,
} from "lucide-react";
import theme from "../../theme/Theme";
import SpotlightCard from "../common/SpotlightCard";

const skills = [
  { name: "HTML & CSS", icon: Layout },
  { name: "JavaScript (ES6+)", icon: Code },
  { name: "React.js", icon: Code }, // Using Code as generic React
  { name: "Tailwind CSS", icon: Layout },
  { name: "Framer Motion", icon: SparklesIcon }, // Custom Logic below
  { name: "Git & GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Node.js", icon: Server }, // Added for "Arsenal" completeness if applicable, or just map existing
];

// Helper for Lucide icons vs Image icons if needed.
// For now, mapping known skills to Lucide.
const getIcon = (skillName) => {
  if (skillName.includes("HTML") || skillName.includes("CSS"))
    return <Layout size={24} />;
  if (skillName.includes("React") || skillName.includes("JavaScript"))
    return <Code size={24} />;
  if (skillName.includes("Git")) return <Github size={24} />;
  if (skillName.includes("Figma")) return <Figma size={24} />;
  if (skillName.includes("Framer")) return <Layout size={24} />; // Placeholder
  return <Terminal size={24} />;
};

const Skills = () => {
  const skillList = [
    { name: "HTML & CSS", icon: <Layout size={32} /> },
    { name: "JavaScript (ES6+)", icon: <Code size={32} /> },
    { name: "React.js", icon: <Code size={32} /> },
    { name: "Tailwind CSS", icon: <Layout size={32} /> },
    {
      name: "Framer Motion",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      ),
    }, // Diamond shape for framer
    { name: "Git & GitHub", icon: <Github size={32} /> },
    { name: "Figma", icon: <Figma size={32} /> },
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
