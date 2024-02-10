import { Cast, GitBranch } from 'lucide-react';
import Image from 'next/image';

const techs = [
	{
		name: 'HTML',
		bgColor: '#DD4B25',
		textColor: '#FFFFFF',
	},
	{
		name: 'CSS',
		bgColor: '#3596D0',
		textColor: '#FFFFFF',
	},
	{
		name: 'Javascript',
		bgColor: '#EAD44D',
		textColor: '#FFFFFF',
	},
];

export function Project() {
	return (
		<article className="w-full rounded-2xl overflow-hidden shadow-md">
			<div className="w-full h-56 relative">
				<Image
					src="https://placehold.co/600x400.png"
					alt="Imagem do projeto"
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
					fill
					priority
				/>
			</div>

			<div className="pt-4 px-6 pb-6 w-full bg-accent flex flex-col gap-3">
				<div className="w-full flex justify-between">
					<p className="text-lg font-medium">Título</p>
					<div className="flex gap-3">
						<a
							href="https://github.com/vitorpedeo"
							target="_blank"
							rel="noopener noreferrer"
							title="Repo"
						>
							<GitBranch />
						</a>
						<a
							href="https://youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Live"
						>
							<Cast />
						</a>
					</div>
				</div>

				<p className="text-body text-base">
					Projeto que visa ajudar um grupo de pessoas a calcularem o valor de
					cada uma para a gorjeta.
				</p>

				<div className="w-full flex flex-wrap gap-2">
					{techs.map(tech => (
						<div
							key={tech.name}
							className="py-1 px-3 rounded"
							style={{ backgroundColor: tech.bgColor }}
						>
							<p
								className="text-xs font-medium"
								style={{ color: tech.textColor }}
							>
								{tech.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</article>
	);
}
