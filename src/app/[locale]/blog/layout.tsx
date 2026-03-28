import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AnimatedBackground } from '@/components/utils/animated-background';

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen">
			<AnimatedBackground />
			<Header mode="blog" />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
