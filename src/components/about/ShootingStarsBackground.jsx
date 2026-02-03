import React, { useEffect, useRef } from "react";
import theme from "../../theme/Theme";

const ShootingStarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        // Angle: Mostly diagonal (top-left to bottom-right)
        this.angle = Math.PI / 4;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.opacity = 0;
        this.fadeState = "in"; // in, out
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Fading logic
        if (this.fadeState === "in") {
          this.opacity += 0.05;
          if (this.opacity >= 1) this.fadeState = "hold";
        } else if (this.fadeState === "out") {
          this.opacity -= 0.05;
          if (this.opacity <= 0) this.reset();
        } else if (this.fadeState === "hold") {
          if (Math.random() > 0.95) this.fadeState = "out";
        }

        // Reset if out of bounds
        if (this.x > width || this.y > height) {
          this.reset();
          // Start from top or left
          if (Math.random() > 0.5) {
            this.x = -100;
            this.y = Math.random() * height;
          } else {
            this.x = Math.random() * width;
            this.y = -100;
          }
        }
      }

      draw() {
        ctx.beginPath();
        // Draw line/trail
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;

        const gradient = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        gradient.addColorStop(0, `rgba(201, 162, 77, 0)`);
        gradient.addColorStop(1, `rgba(201, 162, 77, ${this.opacity})`); // Theme Gold

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    const initStars = () => {
      stars = [];
      const starCount = 20; // Sparse for elegance
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
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
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
    />
  );
};

export default ShootingStarsBackground;
