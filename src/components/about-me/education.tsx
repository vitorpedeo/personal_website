export function Education() {
	return (
		<div className="mt-8 flex flex-col gap-5">
			<div className="flex flex-wrap gap-4 items-start justify-between">
				<div className="flex flex-col gap-1.5">
					<p className="text-xl font-semibold">Nome da Instituição</p>
					<p className="text-body text-base leading-7">Localização</p>
				</div>

				<p className="px-6 py-2 rounded bg-accent shadow-md">
					Jan. 2024 - Jan. 2024
				</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<p className="text-xl font-semibold">Resumo</p>
				<p className="text-body text-base leading-7">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
					nibh nec velit ornare accumsan. Maecenas scelerisque mollis sem, vel
					bibendum lectus euismod vel. Mauris fermentum, nisl at semper
					ullamcorper.
				</p>
			</div>
		</div>
	);
}
