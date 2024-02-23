import { Cast, GitBranch } from 'lucide-react';
import Image from 'next/image';

import { IProject } from '@/types';

type IProjectProps = {
	project: IProject;
};

export function Project({ project }: IProjectProps) {
	return (
		<article className="w-full rounded-2xl overflow-hidden shadow-md">
			<div className="w-full h-56 relative">
				<Image
					src={project.image}
					alt={`Imagem do projeto ${project.title}`}
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
					fill
					priority
				/>
			</div>

			<div className="pt-4 px-6 pb-6 w-full bg-accent flex flex-col gap-3">
				<div className="w-full flex justify-between">
					<p className="text-lg font-medium">{project.title}</p>
					<div className="flex gap-3">
						{project.repoLink && (
							<a
								href={project.repoLink}
								target="_blank"
								rel="noopener noreferrer"
								title="Repo"
							>
								<GitBranch />
							</a>
						)}

						{project.liveLink && (
							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								title="Live"
							>
								<Cast />
							</a>
						)}
					</div>
				</div>

				<p className="text-body text-base">{project.description}</p>

				<div className="w-full flex flex-wrap gap-2">
					{project.techs.map(tech => (
						<div
							key={tech.name}
							className="py-1 px-3 rounded"
							style={{ backgroundColor: tech.color }}
						>
							<p className="text-xs text-white font-medium">{tech.name}</p>
						</div>
					))}
				</div>
			</div>
		</article>
	);
}
