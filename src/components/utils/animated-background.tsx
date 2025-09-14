'use client';

import { useEffect, useRef } from 'react';

interface Dot {
	x: number;
	y: number;
	vx: number;
	vy: number;
	size: number;
	opacity: number;
}

export function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const dotsRef = useRef<Dot[]>([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const animationRef = useRef<number>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const createDots = () => {
			const dots: Dot[] = [];
			const numDots = Math.floor((canvas.width * canvas.height) / 15000);

			for (let i = 0; i < numDots; i++) {
				dots.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
					size: Math.random() * 2 + 1,
					opacity: Math.random() * 0.5 + 0.2,
				});
			}
			dotsRef.current = dots;
		};

		const updateDots = () => {
			dotsRef.current.forEach(dot => {
				// Move dots
				dot.x += dot.vx;
				dot.y += dot.vy;

				// Bounce off edges
				if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
				if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

				// Keep dots in bounds
				dot.x = Math.max(0, Math.min(canvas.width, dot.x));
				dot.y = Math.max(0, Math.min(canvas.height, dot.y));

				// Attract to mouse
				const dx = mouseRef.current.x - dot.x;
				const dy = mouseRef.current.y - dot.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 100) {
					const force = (100 - distance) / 100;
					dot.vx += (dx / distance) * force * 0.01;
					dot.vy += (dy / distance) * force * 0.01;
				}

				// Limit velocity
				dot.vx = Math.max(-2, Math.min(2, dot.vx));
				dot.vy = Math.max(-2, Math.min(2, dot.vy));
			});
		};

		const drawDots = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			dotsRef.current.forEach(dot => {
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(34, 197, 94, ${dot.opacity})`;
				ctx.fill();
			});

			// Draw connections
			dotsRef.current.forEach((dot, i) => {
				dotsRef.current.slice(i + 1).forEach(otherDot => {
					const dx = dot.x - otherDot.x;
					const dy = dot.y - otherDot.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 80) {
						ctx.beginPath();
						ctx.moveTo(dot.x, dot.y);
						ctx.lineTo(otherDot.x, otherDot.y);
						ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - distance / 80)})`;
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				});
			});
		};

		const animate = () => {
			updateDots();
			drawDots();
			animationRef.current = requestAnimationFrame(animate);
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current.x = e.clientX;
			mouseRef.current.y = e.clientY;
		};

		// Initialize
		resizeCanvas();
		createDots();
		animate();

		// Event listeners
		window.addEventListener('resize', () => {
			resizeCanvas();
			createDots();
		});
		window.addEventListener('mousemove', handleMouseMove);

		// Cleanup
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 -z-10 h-full w-full"
			style={{ background: 'transparent' }}
		/>
	);
}
