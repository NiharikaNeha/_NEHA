import React, { useEffect, useRef } from "react";
import theme from "../../theme/Theme";

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let time = 0;

    // Configuration
    const particleCount = Math.min(Math.floor(window.innerWidth / 5), 300); // Dense but performant

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.baseY = height / 2;
        this.offset = Math.random() * 100; // Random offset for wave
        this.speed = 0.002 + Math.random() * 0.002;
        this.size = Math.random() * 2;
        this.alpha = 0.1 + Math.random() * 0.4;
      }

      update(t) {
        // Complex wave function: superposition of sine waves
        const wave1 = Math.sin(this.x * 0.003 + t + this.offset);
        const wave2 = Math.sin(this.x * 0.01 + t * 2 + this.offset);
        const wave3 = Math.cos(this.x * 0.005 + t);

        // Combine waves for "organic" feel
        const displacement = wave1 * 100 + wave2 * 50 + wave3 * 20;

        this.y = this.baseY + displacement;

        // Gentle horizontal drift
        this.x += 0.5;
        if (this.x > width) {
          this.x = 0;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 77, ${this.alpha})`; // theme.colors.accentPrimary
        ctx.fill();

        // Optional: Draw subtle vertical lines for "curtain" effect
        if (Math.random() > 0.98) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(201, 162, 77, ${this.alpha * 0.2})`;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + 20); // Short drip
          ctx.stroke();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        // Distribute across width
        const x = Math.random() * width;
        particles.push(new Particle(x));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint gradient trail for "motion blur" feel (optional, simplistic version here)
      // ctx.fillStyle = 'rgba(11, 11, 11, 0.1)';
      // ctx.fillRect(0,0,width,height);

      time += 0.01;

      // Connect close particles for "mesh" look
      // Optimization: Only connect neighbors? No, simpler is better for "Attraction".
      // Let's just draw the particles as a "Dust" wave.

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(time);
        particles[i].draw();
      }

      requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    />
  );
};

export default ParticleNetwork;
