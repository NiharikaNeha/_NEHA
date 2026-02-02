import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import theme from "../../theme/Theme";
import Button from "../common/Button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-scale e-commerce solution with real-time inventory, secure payments (Stripe), and specific admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    link: "#",
    github: "#",
  },
  {
    title: "Finance Dashboard",
    description:
      "Interactive financial data visualization tool helping users track expenses and invest smarter with AI insights.",
    tags: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    github: "#",
  },
  {
    title: "AI Image Generator",
    description:
      "SaaS application leveraging Stable Diffusion to generate high-quality images from text prompts.",
    tags: ["React", "Python", "FastAPI", "AWS"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80",
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Featured{" "}
            <span style={{ color: theme.colors.accentPrimary }}>Projects</span>
          </h2>
          <p style={{ color: theme.colors.textSecondary }}>
            A selection of my recent work building digital products.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Project Image - Alternating Order */}
              <div
                className={`relative group ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div
                  className="absolute -inset-2 rounded-2xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: theme.colors.accentPrimary }}
                />
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 font-heading"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        color: theme.colors.accentPrimary,
                        borderColor: `${theme.colors.accentPrimary}33`,
                        backgroundColor: `${theme.colors.accentPrimary}1A`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    href={project.link}
                    variant="primary"
                    className="px-6 py-3"
                    icon={<ArrowUpRight size={18} />}
                  >
                    View Project
                  </Button>
                  <Button
                    href={project.github}
                    variant="outline"
                    className="px-6 py-3"
                    icon={<Github size={18} />}
                    iconPosition="left"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
