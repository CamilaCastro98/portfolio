"use client";
import { useEffect, useRef } from 'react';

export default function CanvasLavaLamp() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let blobs = [];
    const numBlobs = 25;

    class Blob {
      constructor() {
        this.radius = Math.random() * 80 + 20;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.opacity = 0.5;
        this.color = '#FCB3AD'; // Color inicial
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.radius < 0 || this.x + this.radius > width) {
          this.speedX *= -1;
        }

        if (this.y - this.radius < 0 || this.y + this.radius > height) {
          this.speedY *= -1;
        }

        // Cambiar el color si el mouse está cerca
        const dx = this.x - mousePos.current.x;
        const dy = this.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.color = distance < this.radius ? '#f78e9f' : '#FCB3AD';
      }

      draw(ctx) {
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.shadowBlur = 1;
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < numBlobs; i++) {
      blobs.push(new Blob());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let blob of blobs) {
        blob.update();
        blob.draw(ctx);
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = (event) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      blobs = [];
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
}
