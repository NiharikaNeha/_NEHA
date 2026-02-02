import React from "react";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-8"
            style={{ color: theme.colors.textPrimary }}
          >
            About <span style={{ color: theme.colors.accentPrimary }}>Me</span>
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-12"
            style={{ color: theme.colors.textSecondary }}
          >
            I am a passionate creative developer with a keen eye for detail. I
            bridge the gap between design and engineering, creating software
            that is not only functional but also intuitive and beautiful. With a
            background in both{" "}
            <span style={{ color: theme.colors.textPrimary }}>
              UI/UX design
            </span>{" "}
            and{" "}
            <span style={{ color: theme.colors.textPrimary }}>
              full-stack development
            </span>
            , I bring a unique perspective to every project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { count: "50+", label: "Projects Completed" },
              { count: "10+", label: "Happy Clients" },
              { count: "5+", label: "Years Experience" },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3
                  className="text-4xl font-bold mb-2"
                  style={{ color: theme.colors.accentPrimary }}
                >
                  {item.count}
                </h3>
                <p style={{ color: theme.colors.textMuted }}>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
