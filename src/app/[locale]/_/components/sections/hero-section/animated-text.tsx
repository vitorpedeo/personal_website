'use client';

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
	texts: string[];
	className?: string;
}

export function AnimatedText({ texts, className = '' }: AnimatedTextProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible(false);
			setTimeout(() => {
				setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
				setIsVisible(true);
			}, 300);
		}, 3000);

		return () => clearInterval(interval);
	}, [texts.length]);

	return (
		<span
			className={`inline-block transition-all duration-300 ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
			} ${className}`}
		>
			{texts[currentIndex]}
		</span>
	);
}
