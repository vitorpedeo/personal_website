'use client';

import { TypeAnimation } from 'react-type-animation';

export const Typing = () => {
	return (
		<TypeAnimation
			sequence={[
				'React',
				500,
				'Flutter',
				500,
				'React Native',
				500,
				'Next.js',
				500,
				'Node.js',
				500,
				'Laravel',
				500,
			]}
			className="text-highlight text-2xl sm:text-4xl font-bold text-center"
			repeat={Infinity}
			speed={50}
		/>
	);
};
