import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import theme from "../../theme/Theme";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with him was an absolute pleasure. He transformed our vague ideas into a stunning, functional reality. The attention to detail is unmatched.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    content:
      "The best developer I've worked with. He not only writes clean code but also understands the product vision and user needs deeply.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Emily Davis",
    role: "Founder, DesignHub",
    content:
      "His ability to bridge design and engineering is rare. The animations and interactions he implemented took our site to the next level.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
            Client{" "}
            <span style={{ color: theme.colors.accentPrimary }}>Stories</span>
          </h2>
          <p style={{ color: theme.colors.textSecondary }}>
            What people say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl relative"
              style={{
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div
                className="absolute -top-4 left-8 p-3 rounded-full"
                style={{
                  backgroundColor: theme.colors.accentPrimary,
                  color: "#000",
                }}
              >
                <Quote size={20} fill="black" />
              </div>

              <p
                className="mb-6 italic leading-relaxed"
                style={{ color: theme.colors.textMuted }}
              >
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: theme.colors.accentPrimary }}
                />
                <div>
                  <h4
                    className="font-bold text-sm"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {item.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
