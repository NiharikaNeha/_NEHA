import React from "react";
import theme from "../../theme/Theme";

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  icon,
  iconPosition = "right",
  type = "button",
  ...props
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variants = {
    primary: {
      style: {
        backgroundColor: theme.colors.accentPrimary,
        color: "#000",
      },
      hoverStyle: {
        backgroundColor: "#FFF",
      },
    },
    outline: {
      style: {
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.textPrimary,
        backgroundColor: "transparent",
      },
      hoverStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
    "accent-outline": {
      style: {
        border: `1px solid ${theme.colors.accentPrimary}`,
        color: theme.colors.accentPrimary,
        backgroundColor: "transparent",
      },
      hoverStyle: {
        backgroundColor: theme.colors.accentPrimary,
        color: "#000",
      },
    },
  };

  const currentVariant = variants[variant] || variants.primary;

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      className={`${baseStyles} group ${className}`}
      style={{ ...currentVariant.style }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, currentVariant.hoverStyle);
      }}
      onMouseLeave={(e) => {
        // Reset to original style
        Object.assign(e.currentTarget.style, currentVariant.style);
      }}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Component>
  );
};

export default Button;
