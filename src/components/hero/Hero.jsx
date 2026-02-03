import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import theme from "../../theme/Theme";
import Button from "../common/Button";
import image from "../../assets/Me.jpeg"
import resume from "../../assets/Neha_Resume.pdf"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Gradient/Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.colors.accentPrimary} 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-accent-primary font-medium tracking-widest text-sm mb-4 uppercase"
            style={{ color: theme.colors.accentPrimary }}
          >
            Developer & Designer
          </h2>
          <h1
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }} // Responsive heading
          >
            Hi! <br />
            <span style={{ color: theme.colors.accentPrimary }}>
              I'm
            </span>{" "}
            Neha.<span className="text-5xl">👋🏻</span>
          </h1>
          <p
            className="text-lg mb-8 max-w-lg leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            I am a Fullstack web developer & a UI/UX designer from Bhubaneswar. I'm a fresher and I'm finding a job in web development and as a UI/UX designer.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              href="#projects"
              variant="primary"
              icon={
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              }
            >
              View Work
            </Button>
            <Button
              href={resume}
              variant="outline"
            >
              View Resume
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-full blur-[20px] opacity-40 animate-pulse"
              style={{ backgroundColor: theme.colors.accentPrimary }}
            />
            {/* Image Container */}
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent-primary/30 z-10"
              style={{ borderColor: `${theme.colors.accentPrimary}4D` }}
            >
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-surface border border-accent-primary p-4 rounded-xl shadow-lg z-20"
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.accentPrimary,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-xs text-text-muted leading-tight">
                  Years of <br /> Experience
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
