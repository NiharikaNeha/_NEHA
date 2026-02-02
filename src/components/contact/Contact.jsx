import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import theme from "../../theme/Theme";
import Button from "../common/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-surface"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-heading text-4xl font-bold mb-6"
              style={{ color: theme.colors.textPrimary }}
            >
              Let's Work{" "}
              <span style={{ color: theme.colors.accentPrimary }}>
                Together
              </span>
            </h2>
            <p
              className="text-lg mb-12"
              style={{ color: theme.colors.textSecondary }}
            >
              Have a project in mind? I’d love to hear about it. Send me a
              message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email", value: "hello@example.com" },
                { icon: <Phone />, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: <MapPin />, label: "Location", value: "New York, NY" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div
                    className="p-4 rounded-full"
                    style={{
                      backgroundColor: `${theme.colors.accentPrimary}1A`,
                      color: theme.colors.accentPrimary,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: theme.colors.textMuted }}
                    >
                      {item.label}
                    </h4>
                    <p
                      className="font-medium text-lg"
                      style={{ color: theme.colors.textPrimary }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-2xl border"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-surface border focus:outline-none transition-colors"
                    style={{
                      backgroundColor: theme.colors.surface,
                      borderColor: theme.colors.border,
                      color: theme.colors.textPrimary,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.colors.accentPrimary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.colors.border)
                    }
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-surface border focus:outline-none transition-colors"
                    style={{
                      backgroundColor: theme.colors.surface,
                      borderColor: theme.colors.border,
                      color: theme.colors.textPrimary,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = theme.colors.accentPrimary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = theme.colors.border)
                    }
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-surface border focus:outline-none transition-colors"
                  style={{
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                    color: theme.colors.textPrimary,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = theme.colors.accentPrimary)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.colors.border)
                  }
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-surface border focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.border,
                    color: theme.colors.textPrimary,
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = theme.colors.accentPrimary)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = theme.colors.border)
                  }
                  placeholder="Tell better about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                icon={<Send size={18} />}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
