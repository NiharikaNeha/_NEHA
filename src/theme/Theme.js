const theme = {
  colors: {
    /* Backgrounds */
    background: "#0B0B0B",
    surface: "#111111",

    /* Text */
    textPrimary: "#F5F5F5",
    textSecondary: "#B3B3B3",
    textMuted: "#8A8A8A",

    /* Accents */
    accentPrimary: "#C9A24D",   // Gold
    accentHover: "#E6C87A",

    /* Borders & Lines */
    border: "#1F1F1F",
    divider: "#262626",

    /* Status */
    success: "#15834A",
    warning: "#CAA044",
    error: "#DC3A3A",
  },

  typography: {
    fontFamily: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },

    fontSize: {
      hero: "3.5rem",        // 56px
      h1: "2.5rem",          // 40px
      h2: "2rem",            // 32px
      h3: "1.5rem",          // 24px
      body: "1rem",          // 16px
      small: "0.875rem",     // 14px
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },

    lineHeight: {
      heading: 1.2,
      body: 1.6,
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "64px",
    xxl: "96px",
  },

  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    pill: "999px",
  },

  shadow: {
    soft: "0 10px 30px rgba(0,0,0,0.35)",
    glowGold: "0 0 20px rgba(201,162,77,0.35)",
  },

  transition: {
    fast: "0.2s ease",
    normal: "0.4s ease",
    slow: "0.6s ease",
  },
};

export default theme;
