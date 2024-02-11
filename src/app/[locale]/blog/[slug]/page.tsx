import { CalendarDays, Timer } from 'lucide-react';
import Image from 'next/image';

const tags = ['API', 'Back End', 'Notion', 'Next.js'];

export default function BlogPost() {
	return (
		<div className="flex flex-col gap-8">
			<div className="w-full h-80 relative">
				<Image
					src="https://placehold.co/600x400.png"
					alt="Imagem do post"
					className="rounded-2xl object-cover"
					sizes="(max-width: 1200px) 100vw"
					fill
					priority
				/>
			</div>

			<div className="flex flex-col gap-6">
				<h1 className="text-3xl md:text-5xl font-bold leading-[48px] md:leading-[72px]">
					Como utilizar a API do Notion como uma Banco de Dados para a sua
					aplicação
				</h1>
				<div className="flex gap-6">
					<div className="text-body flex gap-2">
						<CalendarDays size="16px" />
						<time className="text-xs">28 de janeiro de 2024</time>
					</div>
					<div className="text-body flex gap-2">
						<Timer size="16px" />
						<time className="text-xs">8 minutos de leitura</time>
					</div>
				</div>
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

			<p className="text-body text-justify leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				sollicitudin magna neque, non aliquet sapien rutrum sit amet. Curabitur
				venenatis elementum lacus, et efficitur dolor posuere tristique. Nam
				imperdiet non ipsum at faucibus. Suspendisse pellentesque ac odio at
				vehicula. In ultrices efficitur sem ac rhoncus. Aenean mollis augue at
				interdum consequat. In nunc erat, euismod in semper vitae, laoreet non.
			</p>
		</div>
	);
}
