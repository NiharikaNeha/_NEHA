import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import theme from "../../theme/Theme";

const Footer = () => {
  return (
    <footer
      className="py-8 border-t"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.background,
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm" style={{ color: theme.colors.textMuted }}>
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {[
            <Github size={20} />,
            <Twitter size={20} />,
            <Linkedin size={20} />,
          ].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="transition-colors hover:text-accent-primary"
              style={{ color: theme.colors.textSecondary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.accentPrimary)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.textSecondary)
              }
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
