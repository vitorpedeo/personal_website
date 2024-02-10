import { Project } from '@/components/projects/project';

export default function AboutMe() {
	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">Meus projetos</h1>
				<p className="text-body leading-7">
					Aqui está uma coleção de projetos que desenvolvi durante minha
					trajetória.
				</p>
			</div>

			<div className="w-full grid gap-8 md:grid-cols-2">
				{Array.from({ length: 4 }).map((_, index) => (
					<Project key={index} />
				))}
			</div>
		</div>
	);
}
