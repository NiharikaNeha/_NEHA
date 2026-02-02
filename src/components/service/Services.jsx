import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Smartphone, TrendingUp } from "lucide-react";
import theme from "../../theme/Theme";

const services = [
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that provide seamless user experiences across all devices.",
  },
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description:
      "Building fast, scalable, and secure web applications using the latest technologies like React, Next.js, and Node.js.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Design",
    description:
      "Designing responsive and native-feel mobile applications that engage users and drive retention.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "SEO & Performance",
    description:
      "Optimizing websites for speed and search engines to increase visibility, ranking, and conversion rates.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-surface"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            My{" "}
            <span style={{ color: theme.colors.accentPrimary }}>Services</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            I offer a comprehensive range of digital services to help businesses
            grow and succeed in the modern world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl group transition-all duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.colors.accentPrimary;
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="mb-6 p-4 rounded-full w-fit transition-colors duration-300 group-hover:bg-accent-primary group-hover:text-black"
                style={{
                  color: theme.colors.accentPrimary,
                  backgroundColor: `${theme.colors.accentPrimary}1A`,
                }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                {service.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: theme.colors.textMuted }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
