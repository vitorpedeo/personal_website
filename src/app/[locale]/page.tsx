import { AboutSection } from '@/components/about-section';
import { AnimatedBackground } from '@/components/animated-background';
import { BlogSection } from '@/components/blog-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { TechStackSection } from '@/components/tech-stack-section';

export default function Home() {
	return (
		<>
			<AnimatedBackground />
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<TechStackSection />
				<ExperienceSection />
				<ProjectsSection />
				<EducationSection />
				<BlogSection />
			</main>
			<Footer />
		</>
	);
}
