import { BlogPost } from '@/components/blog/blog-post';

export default function AboutMe() {
	return (
		<div className="flex flex-col gap-12 items-start">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold">Meu blog</h1>
				<p className="text-body leading-7">
					Escrevo um pouco sobre minha experiência no dia a dia e também tento
					dar algumas dicas sobre as tecnologias do momento.
				</p>
			</div>

			<div className="w-full grid gap-8">
				{Array.from({ length: 4 }).map((_, index) => (
					<BlogPost key={index} />
				))}
			</div>
		</div>
	);
}
