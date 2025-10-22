import { useEffect, useRef } from "react";

export default function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let fireworks = [];
    let particles = [];
    let animationFrameId;

    // set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create firework bursts
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height / 2);
      const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
      const count = 70 + Math.random() * 70;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x,
          y,
          color,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 60 + Math.random() * 20,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life -= 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

      if (Math.random() < 0.05) createFirework(); // random bursts

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5000]"
    />
  );
}
