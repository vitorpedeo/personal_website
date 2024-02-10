import { DownloadCVButtons } from '@/components/about-me/download-cv-buttons';
import { Education } from '@/components/about-me/education';
import { Experiencie } from '@/components/about-me/experience';

export default function AboutMe() {
	return (
		<div className="flex flex-col gap-12 items-start">
			<section className="w-full flex gap-16">
				<div className="flex-1 flex flex-col gap-12">
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl font-bold">Sobre mim</h1>
						<p className="text-body leading-7">
							Aqui você irá encontrar todas as minhas experiências e formações,
							bem como o meu currículo profissional.
						</p>
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">Currículo</h2>
						<p className="text-body leading-7">
							Utilize uma das opções abaixo para fazer o download do meu
							currículo!
						</p>
						<DownloadCVButtons />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">Experiência</h2>
						<p className="text-body leading-7">
							Minha carreira como desenvolvedor iniciou-se em 2020 e, desde
							então, sigo evoluindo como profissional.
						</p>
						<Experiencie />
					</div>

					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">Formação</h2>
						<p className="text-body leading-7">
							Assim como na vida profissional, sempre fui aplicado na minha
							formação acadêmica.
						</p>
						<Education />
					</div>
				</div>

				<div className="py-3 px-4 rounded bg-accent shadow-md hidden md:flex flex-col gap-2 self-start">
					<p className="text-sm font-medium">Conteúdo</p>
					<div className="w-36 h-px round bg-foreground" />
					<ul className="mt-3 list-none flex flex-col gap-1">
						<li>
							<a href="#curriculo" className="text-body text-xs">
								Currículo
							</a>
						</li>
						<li>
							<a href="#experiencia" className="text-body text-xs">
								Experiência
							</a>
						</li>
						<li>
							<a href="#formacao" className="text-body text-xs">
								Formação
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
