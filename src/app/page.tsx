import Link from 'next/link';

import { Typing } from '@/components/utils/typing';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col gap-2">
				<p className="text-2xl sm:text-4xl font-semibold text-center">
					Me chamo
				</p>
				<p className="text-highlight text-5xl sm:text-7xl font-bold text-center">
					Vitor Pereira
				</p>
				<p className="text-2xl sm:text-4xl font-semibold text-center">
					Desenvolvedor Full Stack que adora construir com
				</p>
				<Typing />
			</div>

			<ul className="mt-12 list-none flex gap-6 items-center">
				<li className="hover:text-highlight">
					<Link href="/about-me">Sobre mim</Link>
				</li>
				<li className="hover:text-highlight">
					<Link href="/blog">Blog</Link>
				</li>
				<li className="hover:text-highlight">
					<Link href="/projects">Projetos</Link>
				</li>
			</ul>
		</div>
	);
}
