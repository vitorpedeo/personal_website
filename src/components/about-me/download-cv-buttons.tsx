const options = [
	{
		lang: 'PT-BR',
		url: 'https://yotube.com',
	},
	{
		lang: 'EN-US',
		url: 'https://yotube.com',
	},
];

export function DownloadCVButtons() {
	return (
		<div className="mt-2 flex gap-8 flex-wrap">
			{options.map(option => (
				<a
					key={option.lang}
					href={option.url}
					target="_blank"
					rel="noopener noreferrer"
					className="px-6 py-1.5 rounded bg-highlight text-white text-base hover:opacity-50 transition-opacity duration-300 ease-in-out"
				>
					Currículo em {option.lang}
				</a>
			))}
		</div>
	);
}
