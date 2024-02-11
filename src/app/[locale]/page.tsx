import { useTranslations } from 'next-intl';

import { Typing } from '@/components/utils/typing';
import { Link } from '@/navigation';

export default function Home() {
	const t = useTranslations();

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col gap-2">
				<p className="text-2xl sm:text-4xl font-semibold text-center">
					{t('home.whoami')}
				</p>
				<p className="text-highlight text-5xl sm:text-7xl font-bold text-center">
					Vitor Pereira
				</p>
				<p className="text-2xl sm:text-4xl font-semibold text-center">
					{t('home.my-description')}
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
