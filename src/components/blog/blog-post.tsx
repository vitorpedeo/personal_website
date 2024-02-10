import Image from 'next/image';
import Link from 'next/link';

const tags = ['API', 'Back End', 'Notion', 'Next.js'];

export function BlogPost() {
	return (
		<Link href="blog/123">
			<article className="w-full rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
				<div className="w-full md:w-80 h-56 relative">
					<Image
						src="https://placehold.co/600x400.png"
						alt="Imagem do post"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
						fill
						priority
					/>
				</div>

				<div className="pt-4 px-6 pb-6 w-full bg-accent flex flex-col gap-3">
					<div className="w-full flex flex-col gap-1">
						<p className="text-lg font-medium leading-7">
							Como utilizar a API do Notion como uma Banco de Dados para a sua
							aplicação
						</p>
						<p className="text-body text-xs">8 minutos de leitura</p>
					</div>

					<p className="text-body text-base">
						O Notion possui várias vantagens, e uma delas é a capacidade de
						prover dados para a sua aplicação.
					</p>

					<div className="mt-auto w-full flex flex-wrap gap-2">
						{tags.map(tag => (
							<p
								key={tag}
								className="py-1.5 px-6 rounded bg-highlight/50 text-highlight text-xs font-medium"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
			</article>
		</Link>
	);
}
